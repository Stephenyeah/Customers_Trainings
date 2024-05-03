import React from 'react';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';


import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';




export default function TrainingDialogContent({ training, handleChange}) {

  const handleChangeDate = (date) => {
    handleChange({ target: { name: 'date', value: training.date } }); // Passing date object directly
  };


  return (
    <DialogContent>


        <LocalizationProvider dateAdapter={AdapterDayjs}>          
                <DateTimePicker
                  
                    views={[ 'day', 'month','year', 'hours', 'minutes']}
                    format="d/MM/YYYY HH mm"
                    selected={training.date ? new Date(training.date) : null}
                    onChange={handleChangeDate}
                    renderInput={(props) => <TextField {...props} margin="dense" fullWidth variant="standard" />}
                    ampm={false}
                />
             
        </LocalizationProvider>

      <TextField
        margin="dense"
        label="Duration in minutes"
        name="duration"
        value={training.duration}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Activity"
        name="activity"
        value={training.activity}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />

      <TextField
        margin="dense"
        label="Customer"
        name="customer"
        value={training.customer.firstname}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />


    </DialogContent>
  );
}