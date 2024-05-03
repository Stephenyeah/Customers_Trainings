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

const fetchCustomerByFirstName = () => {
  fetch(`https://customerrestservice-personaltraining.rahtiapp.fi/api/customers?firstName=${customerFirstName}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch customer');
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 0) {
        setCustomerLink(data[0].link);
      } else {
        console.error('Customer not found');
      }
    })
    .catch(err => console.error(err));
};


export const deleteTraining = (url) => {
  return fetch(url, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok)
      throw new Error("Error in delete: " + response.statusText);
  })
  .catch(err => console.error(err))
}