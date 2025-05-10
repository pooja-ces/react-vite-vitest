import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

vi.mock('./contexts/FormContext', () => ({
  FormProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('App Component', () => {
  it('renders FormProvider context correctly', () => {
    render(<App />);
    
    const formProviderElement = screen.getByText(/user form/i);
    expect(formProviderElement).toBeInTheDocument();
  });
});
