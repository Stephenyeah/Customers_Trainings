import React from 'react';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import moment from 'moment';

export default function TrainingDialogContent({ training, handleChange }) {



  return (
    <DialogContent>

      <TextField
        margin="dense"
        label="date"
        name="date"
        value={formattedDate}
        onChange={handleChange}
        fullWidth
        variant="standard"
      />
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