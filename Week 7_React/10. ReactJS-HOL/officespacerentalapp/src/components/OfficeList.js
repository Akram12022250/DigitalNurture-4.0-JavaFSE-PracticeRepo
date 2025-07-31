import React from 'react';

const OfficeList = () => {
  const heading = <h1>Office Space Rental Details</h1>;

  const officeList = [
    {
      name: "WorkZone Co-Working",
      rent: 55000,
      address: "Chennai, Tamil Nadu",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "UrbanSpace Offices",
      rent: 75000,
      address: "Bangalore, Karnataka",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Skyline Corporate Hub",
      rent: 60000,
      address: "Hyderabad, Telangana",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div>
      {heading}
      {officeList.map((office, index) => {
        const rentStyle = {
          color: office.rent > 60000 ? "green" : "red",
          fontWeight: "bold"
        };

        return (
          <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h2>{office.name}</h2>
            <img src={office.image} alt={office.name} width="150" />
            <p><strong>Address:</strong> {office.address}</p>
            <p><strong>Rent:</strong> <span style={rentStyle}>₹{office.rent}</span></p>
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
