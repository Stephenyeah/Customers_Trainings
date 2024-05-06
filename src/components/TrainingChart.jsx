import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Label, Tooltip } from "recharts";
import { useState, useEffect } from 'react';
import _ from 'lodash';
import React from 'react';

export default function Statistics() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetchTrainings();
    }, []);

    const fetchTrainings = () => {
        fetch('https://traineeapp.azurewebsites.net/gettrainings')
        .then(response => {
        if (response.ok)
            return response.json();
        else
            throw new Error("Error fetching: " + response.statusText);
        })
        .then(data => setTrainings(data))
        .catch(err => console.error(err));
    }

    const statistics = _(trainings)
        .groupBy("activity")
        .map((group, activity) => ({
            activity,
            duration: _.sumBy(group, 'duration'),
        }))
        .value();

    return (
        <>
            <BarChart width={1250} height={650} data={statistics}>
                <Bar type="monotone" dataKey="duration" fill="#6610f2" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="activity" />
                <YAxis>
                    <Label 
                        value="Duration (mins)"
                        position="insideLeft"
                        angle={-85}
                        style={{textAnchor: "middle"}}
                        />
                </YAxis>
                <Tooltip />
            </BarChart>
        </>
    )
}