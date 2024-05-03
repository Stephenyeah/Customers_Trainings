import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { saveCustomer } from '../customerapi';
import CustomerDialogContent from './CustomerDialogContent';

export default function AddCustomer({ fetchCustomers }) {
  const [customer, setCustomer] = useState({
    firstname: '',
    lastname: '',
    streetaddress: '',
    postcode: '',
    city: '',
    email: '',
    phone: ''
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    saveCustomer(customer)
    .then(() => fetchCustomers())
    .catch(err => console.error(err))

    handleClose();
  }

  const handleChange = (event) => {
    setCustomer({...customer, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Customer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Customer</DialogTitle>
        <CustomerDialogContent customer={customer} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}