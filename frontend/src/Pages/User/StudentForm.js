import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../../Assets/CSS/pay.css';

function StudentForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Save student data to local storage or context
    localStorage.setItem('studentData', JSON.stringify(data));
    // Redirect to the payment page
    navigate('/paymentpage');
  };

  return (
    <div className="form-container">
      <h1>Student Details</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <label>
          Age:
          <input
            type="number"
            {...register('age', { required: 'Age is required' })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
}

export default StudentForm;
