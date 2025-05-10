import { render, screen } from '@testing-library/react';
import FormButton from '../FormButton/FormButton';
import { expect, vi } from 'vitest';

describe('FormButton Component', () => {
  it('should render with the correct label', () => {
    render(<FormButton label="Submit" />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('should have a default type of "submit"', () => {
    render(<FormButton label="Submit" />);
    const button = screen.getByText('Submit');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should render with a "button" type when specified', () => {
    render(<FormButton label="Click me" type="button" />);
    const button = screen.getByText('Click me');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should render with a "reset" type when specified', () => {
    render(<FormButton label="Reset" type="reset" />);
    const button = screen.getByText('Reset');
    expect(button).toHaveAttribute('type', 'reset');
  });

  it('should call onClick function when clicked', () => {
    const handleClick = vi.fn();
    render(<FormButton label="Click me" onClick={handleClick} />);
    const button = screen.getByText('Click me');
    button.click();
    expect(handleClick).toHaveBeenCalled();
  });
});
