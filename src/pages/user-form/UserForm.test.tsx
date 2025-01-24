import React from 'react';
import { describe, it, vi, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides extended matchers
import UserForm from './UserForm';

// Mock the useFormData hook
vi.mock('../../hooks/useFormData', () => ({
  default: vi.fn(),
}));

// Mock the FormContainer component
vi.mock('../../components/FormContainer/FormContainer', () => ({
  __esModule: true,
  default: ({ formData, handleChange, handleSubmit }: any) => (
    <form onSubmit={handleSubmit} data-testid="mock-form">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={formData.name || ''}
        onChange={handleChange}
        data-testid="name-input"
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={formData.email || ''}
        onChange={handleChange}
        data-testid="email-input"
      />
      <button type="submit" data-testid="submit-button">
        Submit
      </button>
    </form>
  ),
}));

import useFormData from '../../hooks/useFormData';

describe('UserForm Component', () => {
  let mockHandleChange: vi.Mock;
  let mockResetForm: vi.Mock;
  let mockFormData: Record<string, string>;

  beforeEach(() => {
    mockHandleChange = vi.fn();
    mockResetForm = vi.fn();
    mockFormData = { name: '', email: '' };

    (useFormData as vi.Mock).mockReturnValue({
      formData: mockFormData,
      handleChange: mockHandleChange,
      resetForm: mockResetForm,
    });
  });

  it('renders the UserForm component', async () => {
    render(<UserForm />);
    expect(screen.getByText(/user form/i)).toBeInTheDocument();
    expect(screen.getByTestId('form-page')).toBeInTheDocument();
    await waitFor(() => screen.getByText('Loading Form...'));
  });

  it('renders the FormContainer after lazy load', async () => {
    render(<UserForm />);
    await waitFor(() => screen.getByTestId('mock-form'));
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('handles input changes correctly', async () => {
    render(<UserForm />);
    await waitFor(() => screen.getByLabelText(/name/i));
  
    const nameInput = screen.getByTestId('name-input');
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  
    const event = mockHandleChange.mock.calls[0][0];
    expect(event.target.value).toBe('');
  });
  

  it('submits the form and resets data', async () => {
    render(<UserForm />);
    await waitFor(() => screen.getByTestId('mock-form'));

    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);

    expect(mockResetForm).toHaveBeenCalledTimes(1);
  });
});
