import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = () => {
    const converted = parseFloat(rupees) / 90; // Assuming 1 Euro = ₹90
    setEuro(converted.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        value={rupees}
        onChange={handleChange}
        placeholder="Enter amount in INR"
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro !== null && <p>Converted Amount in Euro: €{euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
