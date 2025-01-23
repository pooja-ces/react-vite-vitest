import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FormContainer from '../FormContainer/FormContainer';
import { FormData } from '../../types/formTypes';

export default {
  title: 'Components/FormContainer',
  component: FormContainer,
} as Meta;

const Template: StoryFn<typeof FormContainer> = (args) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    testField: '',
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(`${e.target.name} updated to: ${e.target.value}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <FormContainer
      {...args}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithValues = Template.bind({});
WithValues.args = {
  formData: {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    testField: '',
    acceptTerms: false
  },
};
