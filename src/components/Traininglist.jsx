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


    const handleDelete = (id) => {
   
        deleteTraining(id)
        fetchTrainings()
        .then(data => setTrainings(data))

        .catch(error => console.error('Error deleting or fetching data:', error));
    }


  

  const [columnDefs] = useState([
    { field: 'date', sortable: true, filter: true ,width: 250,
     valueFormatter: (params) => moment(params.value).format('DD-MM-YYYY HH:mm'),floatingFilter: true  },
    { field: 'duration', headerName: 'Duration in minutes', sortable: true, filter: true,floatingFilter: true  },
    { field: 'activity', sortable: true, filter: true, width: 250 ,floatingFilter: true  },
    { field: 'customer.firstname',headerName: 'Customer',  sortable: true, filter: true,floatingFilter: true },

    {
      cellRenderer: params => 
        <Button color="error" size="small" onClick={() => handleDelete(params.data.id)}>
          Delete
        </Button>,
      width: 120
    },

  ]);


 
  return(
    <>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h2>Trainings</h2>
    </div>
    

    <div style={{ width: '90%', maxWidth: '1280px', margin: '0 auto',marginLeft: '7%' }}>

      <div className='ag-theme-material' style={{  height: 1200  }}>
        <AgGridReact 
          rowData={trainings}
          columnDefs={columnDefs}
          pagination={true}
          paginationAutoPageSize={true}
          domLayout="autoHeight"
          onFirstDataRendered={(params) => {
            params.api.sizeColumnsToFit();
          }}
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