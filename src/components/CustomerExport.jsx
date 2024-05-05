import { CSVLink } from 'react-csv';
const CustomerExport = ({ customers }) => {
  const csvHeaders = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Street Address", key: "streetaddress" },
    { label: "Postcode", key: "postcode" },
    { label: "City", key: "city" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
  ];

  return (
    <CSVLink data={customers} headers={csvHeaders} filename="customer-list.csv"
    className="export-button">
      Export to CSV
    </CSVLink>
  );
};

export default CustomerExport;