import React from "react";
import { FormData } from "../../types/formTypes";

export interface InputFieldProps {
  label: string;
  name: keyof FormData;
  type?: "text" | "email" | "password" | "checkbox" | "select" | "radio";
  value: string | boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[];
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  options,
}) => {
  if (type === "select") {
    return (
      <div className="input-field">
        <label htmlFor={name}>{label}</label>
        <select
          id={name}
          name={name}
          value={value as string}
          onChange={onChange}
          className="input"
        >
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === "radio" && options) {
    return (
      <div className="input-field">
        <label>{label}</label>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={name as string}
              value={option}
              checked={value === option}
              onChange={onChange}
              className="radio"
            />
            {option}
          </label>
        ))}
      </div>
    );
  }

  return (
    <div className="input-field">
      {type === "checkbox" ? (
        <label>
          <input
            type="checkbox"
            name={name}
            checked={Boolean(value)}
            onChange={onChange}
            className="checkbox"
          />
          {label}
        </label>
      ) : (
        <>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            type={type}
            name={name}
            value={value as string}
            onChange={onChange}
            className="input"
          />
        </>
      )}
    </div>
  );
};

export default InputField;
