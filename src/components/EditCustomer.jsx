import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { updateCustomer } from '../customerapi';
import CustomerDialogContent from './CustomerDialogContent';

export default function EditCustomer({ customerdata, fetchCustomers }) {
  const [customer, setCustomer] = useState({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    year: '',
    price: ''
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log(customerdata);
    setCustomer({
      brand: customerdata.brand,
      model: customerdata.model,
      color: customerdata.color,
      fuel: customerdata.fuel,
      price: customerdata.price,
      year: customerdata.year
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    updateCustomer(customer, customerdata._links.customer.href)
    .then(() => fetchCustomers())
    
    handleClose();
  }

  const handleChange = (event) => {
    setCustomer({...customer, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Customer</DialogTitle>
        <CustomerDialogContent customer={customer} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}