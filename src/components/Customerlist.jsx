import { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import { fetchCustomers, deleteCustomer } from '../customerapi';
import AddTraining from "./AddTrainings";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { fetchTrainings } from '../trainingapi';

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

  const addTraining = (trainingData) => {
    fetch(
      "https://customerrestservice-personaltraining.rahtiapp.fi/api/trainings",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trainingData),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Error when adding a Training: " + response.statusText
          );
        }
        return response.json();
      })
      .then(() => fetchCustomers())
      .then(() => {
        // Reload the page after successful deletion
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  const [columnDefs] = useState([
    { field: 'firstname', sortable: true, filter: true, width: 125 ,floatingFilter: true },
    { field: 'lastname', sortable: true, filter: true, width: 125, floatingFilter: true  },
    { field: 'streetaddress', sortable: true, filter: true, width: 160 ,floatingFilter: true },
    { field: 'postcode', sortable: true, filter: true, width: 120,floatingFilter: true },
    { field: 'city', sortable: true, filter: true, width: 120,floatingFilter: true  },
    { field: 'email', sortable: true, filter: true, width: 180,floatingFilter: true },
    { field: 'phone', sortable: true, filter: true, width: 150,floatingFilter: true },

    {
      cellRenderer: (params) => (
        <AddTraining addTraining={addTraining} customer={params.data} />
      ),
      width: 100,
    },

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
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h2>Customers</h2>
      
    </div>
    <div style={{ maxWidth: '1280px', margin: '0 auto',marginLeft: '8%' }}>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <AddCustomer fetchCustomers={getCustomers} />
      </Stack>
      <div className='ag-theme-material' style={{ width: '95%', height: 600 }}>
        <AgGridReact 
          rowData={customers}
          columnDefs={columnDefs}
          pagination={true}
          paginationAutoPageSize={true}
        />
      </div>
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