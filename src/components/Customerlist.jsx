import { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import { fetchCustomers, deleteCustomer } from '../customerapi';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function Customerlist() {
  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    fetchCustomers()
    .then(data => setCustomers(data._embedded.customers));
  }

  const handleDelete = (url) => {
    if (window.confirm("Are your sure?")) {
      deleteCustomer(url)
      .then(() => {
        setOpen(true); 
        getCustomers();
      })
    }
  }

  const [columnDefs] = useState([
    { field: 'firstname', sortable: true, filter: true },
    { field: 'lastname', sortable: true, filter: true },
    { field: 'streetaddress', sortable: true, filter: true },
    { field: 'postcode', sortable: true, filter: true, width: 100 },
    { field: 'city', sortable: true, filter: true, width: 100 },
    { field: 'email', sortable: true, filter: true, width: 120 },
    { field: 'phone', sortable: true, filter: true, width: 120 },


    {
      cellRenderer: params => <EditCustomer customerdata={params.data} fetchCustomers={getCustomers} />,
      width: 120
    },
    {
      cellRenderer: params => 
        <Button color="error" size="small" onClick={() => handleDelete(params.data._links.customer.href)}>
          Delete
        </Button>,
      width: 120
    },
  ]);
 
  return(
    <>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <AddCustomer fetchCustomers={getCustomers} />
      </Stack>
      <div className='ag-theme-material' style={{ width: '90%', height: 600 }}>
        <AgGridReact 
          rowData={customers}
          columnDefs={columnDefs}
          pagination={true}
          paginationAutoPageSize={true}
        />
      </div>
      <Snackbar 
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Customer deleted succesfully"
      />
    </>
  );
}

export default Customerlist;