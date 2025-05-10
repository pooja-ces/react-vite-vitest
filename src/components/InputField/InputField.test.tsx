import { render, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';
import InputField from './InputField';
import { FormData } from "../../types/formTypes";

describe('InputField', () => {
  const mockHandleChange = vi.fn();

  const formData: FormData = {
    name: '',
    email: '',
    password: '',
    acceptTerms: false,
    role: '',
    gender: '',
    testField: ''
  };

  beforeEach(() => {
    mockHandleChange.mockClear();
  });

  it('renders text input correctly and handles change', () => {
    render(
      <InputField
        label="Name"
        name="name"
        type="text"
        value={formData.name || ""}
        onChange={mockHandleChange}
      />
    );

    const input = screen.getByLabelText(/name/i);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'John Doe' } });
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });

  it('renders email input correctly and handles change', () => {
    render(
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={mockHandleChange}
      />
    );

    const input = screen.getByLabelText(/email/i);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'john.doe@example.com' } });
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });

  it('renders password input correctly and handles change', () => {
    render(
      <InputField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={mockHandleChange}
      />
    );

    const input = screen.getByLabelText(/password/i);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'password123' } });
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });

  it('renders checkbox correctly and handles change', () => {
    render(
      <InputField
        label="Accept Terms"
        name="acceptTerms"
        type="checkbox"
        value={formData.acceptTerms}
        onChange={mockHandleChange}
      />
    );

    const checkbox = screen.getByLabelText(/accept terms/i);
    expect(checkbox).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });

  it('renders select input correctly and handles change', () => {
    render(
      <InputField
        label="Role"
        name="role"
        type="select"
        value={formData.role}
        onChange={mockHandleChange}
        options={['Admin', 'User', 'Guest']}
      />
    );

    const select = screen.getByLabelText(/role/i);
    expect(select).toBeInTheDocument();

    fireEvent.change(select, { target: { value: 'Admin' } });
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });

  it('renders radio input correctly and handles change', () => {
    render(
      <InputField
        label="Gender"
        name="gender"
        type="radio"
        value={formData.gender}
        onChange={mockHandleChange}
        options={['Male', 'Female', 'Other']}
      />
    );
  
    const radios = screen.getAllByLabelText(/male/i);
    expect(radios[0]).toBeInTheDocument();
  
    fireEvent.click(radios[0]);
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });
 
  it('sets the correct checked state for radio buttons', () => {
    render(
      <InputField
        label="Gender"
        name="gender"
        type="radio"
        value="Male"
        onChange={mockHandleChange}
        options={['Male', 'Female', 'Other']}
      />
    );
  
    const maleRadio = screen.getByRole('radio', { name: 'Male' }) as HTMLInputElement;
    const femaleRadio = screen.getByRole('radio', { name: 'Female' }) as HTMLInputElement;
  
    expect(maleRadio.checked).toBe(true);
    expect(femaleRadio.checked).toBe(false);
  });   

  it('sets the correct checked state for checkbox', () => {
    render(
      <InputField
        label="Accept Terms"
        name="acceptTerms"
        type="checkbox"
        value={true}
        onChange={mockHandleChange}
      />
    );

    const checkbox = screen.getByLabelText(/accept terms/i) as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });
});
