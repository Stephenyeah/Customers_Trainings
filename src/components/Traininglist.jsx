import { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { fetchTrainings, deleteTraining } from '../trainingapi';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import moment from 'moment';
import AddTrainings from './AddTrainings';


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
     valueFormatter: (params) => moment(params.value).format('DD-MM-YYYY HH:mm') },
    { field: 'duration', headerName: 'Duration in minutes', sortable: true, filter: true },
    { field: 'activity', sortable: true, filter: true, width: 250  },
    { field: 'customer.firstname',headerName: 'Customer',  sortable: true, filter: true },



  ]);


 
  return(
    <>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h2>Trainings</h2>
    </div>
    

    <div style={{ width: '90%', maxWidth: '1280px', margin: '0 auto',marginLeft: '20%' }}>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <AddTrainings fetchTrainings={getTrainings} />
        </Stack>
      <div className='ag-theme-material' style={{  height: 1200  }}>
        <AgGridReact 
          rowData={trainings}
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
        message="Training deleted succesfully"
      />
    </>
  );
}

export default Traininglist;