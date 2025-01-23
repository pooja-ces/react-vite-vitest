import { useState } from 'react';
import { FormData } from '../types/formTypes';

const useFormData = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    gender: '',
    role: '',
    testField: '',
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      gender: '',
      role: '',
      testField: '',
      acceptTerms: false,
    });
  };

  return { formData, handleChange, resetForm };
};

export default useFormData;
