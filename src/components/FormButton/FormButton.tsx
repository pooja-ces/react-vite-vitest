import React from 'react';

interface FormButtonProps {
  label: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
}

const FormButton: React.FC<FormButtonProps> = ({
  label,
  type = 'submit',
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
      onClick={onClick}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );
};

export default FormButton;
