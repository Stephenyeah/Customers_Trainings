import { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { fetchTrainings, deleteTraining } from '../trainingapi';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import moment from 'moment';

function Traininglist() {
  const [trainings, setTrainings] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTrainings();
  }, []);

  const getTrainings = () => {
    fetchTrainings()
    .then(data => setTrainings(data));
  }




  const handleDelete = (url) => {
    if (window.confirm("Are your sure?")) {
      deleteTraining(url)
      .then(() => {
        setOpen(true); 
        getTrainings();
      })
    }
  }
  

  const [columnDefs] = useState([
    { field: 'date', sortable: true, filter: true ,width: 250,
     valueFormatter: (params) => moment(params.value).format('YYYY-MM-DD HH:mm:ss') },
    { field: 'duration', sortable: true, filter: true },
    { field: 'activity', sortable: true, filter: true, width: 250  },
    { field: 'customer.firstname',headerName: 'Customer',  sortable: true, filter: true },



  ]);
 
  return(
    <>

      <div className='ag-theme-material' style={{ width: '90%', height: 600 }}>
        <AgGridReact 
          rowData={trainings}
          columnDefs={columnDefs}
          pagination={true}
          paginationAutoPageSize={true}
        />
      </div>
      <Snackbar 
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Training deleted succesfully"
      />
    </>
  );
}

export default Traininglist;