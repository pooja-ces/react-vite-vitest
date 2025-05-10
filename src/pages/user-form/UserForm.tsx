import React, { Suspense } from 'react';
import useFormData from '../../hooks/useFormData';

const FormContainer = React.lazy(() => import('../../components/FormContainer/FormContainer'));

const UserForm: React.FC = () => {
  const { formData,  handleChange, resetForm } = useFormData();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    resetForm();
  };

  return (
    <div className="form-page" data-testid="form-page">
      <h1>User Form</h1>
      <Suspense fallback={<div>Loading Form...</div>}>
        <FormContainer
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Suspense>
    </div>
  );
};

export default UserForm;
