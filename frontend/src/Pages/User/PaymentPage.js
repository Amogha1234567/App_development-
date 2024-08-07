import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../../Assets/CSS/pay.css';

function PaymentPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve student data from local storage
    const data = localStorage.getItem('studentData');
    if (data) {
      setStudentData(JSON.parse(data));
    } else {
      navigate('/'); // Redirect to home if no student data
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      // Mock API call for payment
      const response = await fetch('https://mock-payment-api.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Payment successful!');
        localStorage.removeItem('studentData'); // Clear student data
        navigate('/'); // Redirect to home
      } else {
        alert('Payment failed.');
      }
    } catch (error) {
      alert('Payment failed.');
    }
  };

  return (
    <div className="form-container">
      <h1>Payment Page</h1>
      {studentData && (
        <div>
          <h2>Student Information</h2>
          <p>Name: {studentData.name}</p>
          <p>Age: {studentData.age}</p>
          <p>Email: {studentData.email}</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Card Number:
          <input
            type="text"
            {...register('cardNumber', { required: 'Card number is required' })}
          />
          {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            {...register('expiryDate', { required: 'Expiry date is required' })}
          />
          {errors.expiryDate && <span>{errors.expiryDate.message}</span>}
        </label>
        <label>
          CVV:
          <input
            type="text"
            {...register('cvv', { required: 'CVV is required' })}
          />
          {errors.cvv && <span>{errors.cvv.message}</span>}
        </label>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentPage;
