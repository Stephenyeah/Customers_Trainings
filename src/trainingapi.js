
export const fetchTrainings = () => {
  return fetch(import.meta.env.VITE_URL + '/gettrainings')
  .then(response => {
    if (!response.ok)
      throw new Error("Something went wrong: " + response.statusText);
  
    return response.json();  
  })
  .catch(err => console.error(err))
}



export const saveTraining = (training) => {
  return fetch(import.meta.env.VITE_API_URL + '/trainings', {
    method: 'POST',
    headers: { 'Content-type':'application/json' },
    body: JSON.stringify(training)
  })
  .then(response => {
    if (!response.ok)
      throw new Error("Addition failed: " + response.statusText);

    return response.json();
  })
  .catch(err => console.error(err))
}




// export const deleteTraining = (url) => {
//   return fetch(url, {
//     method: 'DELETE'
//   })
//   .then(response => {
//     if (!response.ok)
//       throw new Error("Error in delete: " + response.statusText);
//   })
//   .catch(err => console.error(err))
// }

export const deleteTraining = (id) => {
    if (window.confirm("Are you sure you want to delete this training?")) {
      fetch(import.meta.env.VITE_API_URL+ "/trainings/"+ id, {method: 'DELETE'})
      .then(response => {
          if (!response.ok) {
              throw new Error("Error in deletion: " + response.statusText);
          }
          alert("Training deleted successfully!");
          // Refresh the results
          fetchTrainings().then(data => setTrainings(data));
          
      })
        
        
        .catch((err) => console.error(err));
    }
  };