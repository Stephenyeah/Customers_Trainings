import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { saveTraining } from '../trainingapi';
import TrainingDialogContent from './TrainingDialogContent';
import TextField from '@mui/material/TextField'


export default function AddTraining({ fetchTrainings }) {
  const [training, setTraining] = useState({
    date: '',
    duration: '',
    activity: '',
    customer: ''
    
  });
  const [open, setOpen] = useState(false);
  const [customerLink, setCustomerLink] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const newTraining = {
      date: training.date,
      activity: training.activity,
      duration: training.duration,
      customer: customerLink
    };

    saveTraining(newTraining)
      .then(() => {
        fetchTrainings();
        handleClose();
      })
      .catch(err => console.error(err));
  }

  const handleChange = (event) => {
    setTraining({...training, [event.target.name]: event.target.value });
  }

  const handleChangeDate = (date) => {
    setTraining({ ...training, date: date.toISOString() });// Setting the date object directly
  };



 

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Training
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Training</DialogTitle>
        <TrainingDialogContent training={training} handleChange={handleChange} 
        handleChangeDate={handleChangeDate} 
        />

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}