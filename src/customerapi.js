export const fetchCustomers = () => {
  return fetch(import.meta.env.VITE_API_URL + '/customers')
  .then(response => {
    if (!response.ok)
      throw new Error("Something went wrong: " + response.statusText);
  
    return response.json();  
  })
  .catch(err => console.error(err))
}

export const saveCustomer = (customer) => {
  return fetch(import.meta.env.VITE_API_URL + '/customers', {
    method: 'POST',
    headers: { 'Content-type':'application/json' },
    body: JSON.stringify(customer)
  })
  .then(response => {
    if (!response.ok)
      throw new Error("Addition failed: " + response.statusText);

    return response.json();
  })
  .catch(err => console.error(err))
}

export const updateCustomer = (customer, url) => {
  return fetch(url, {
    method: 'PUT',
    headers: { 'Content-type':'application/json' },
    body: JSON.stringify(customer)
  })
  .then(response => {
    if (!response.ok)
      throw new Error("Error in edit: " + response.statusText);

    return response.json();
  })
  .catch(err => console.error(err))
}

export const deleteCustomer = (url) => {
  return fetch(url, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok)
      throw new Error("Error in delete: " + response.statusText);
  })
  .catch(err => console.error(err))
}