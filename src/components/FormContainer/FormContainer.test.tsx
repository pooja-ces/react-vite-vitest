import { render, screen, fireEvent } from '@testing-library/react';
import { expect, vi } from 'vitest';
import FormContainer from '../FormContainer/FormContainer';

describe('FormContainer Component', () => {
  const mockHandleChange = vi.fn();
  const mockHandleSubmit = vi.fn();

  const formData = {
    name: '',
    email: '',
    password: '',
    gender: '',
    role: '',
    testField: '',
    acceptTerms: false,
  };

  beforeEach(() => {
    render(
      <FormContainer 
        formData={formData} 
        handleChange={mockHandleChange} 
        handleSubmit={mockHandleSubmit} 
      />
    );
  });

  it('should render all input fields', () => {
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should call handleChange when input fields are changed', () => {
    const nameInput = screen.getByLabelText('Name') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(mockHandleChange).toHaveBeenCalledTimes(1);

    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    expect(mockHandleChange).toHaveBeenCalledTimes(2);
  });

  it('should call handleSubmit when form is submitted', () => {
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  });
});
