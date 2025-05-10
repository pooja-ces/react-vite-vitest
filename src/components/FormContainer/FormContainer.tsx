import React from "react";
import { FormData } from "../../types/formTypes";
import InputField from "../InputField/InputField";
import FormButton from "../FormButton/FormButton";

interface FormContainerProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const FormContainer: React.FC<FormContainerProps> = ({
  formData,
  handleChange,
  handleSubmit,
}) => {
  const roleOptions = ["Admin", "User", "Guest"];
  const genderOptions = ["Male", "Female", "Other"];

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <InputField
        label="Name"
        name="name"
        value={formData.name || ''}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <InputField
        label="Accept Terms and Conditions"
        name="acceptTerms"
        type="checkbox"
        value={formData.acceptTerms}
        onChange={handleChange}
      />
      <InputField
        label="Role"
        name="role"
        type="select"
        value={formData.role || ''}
        onChange={handleChange}
        options={roleOptions}
      />
      <InputField
        label="Gender"
        name="gender"
        type="radio"
        value={formData.gender}
        onChange={handleChange}
        options={genderOptions}
      />
      <FormButton label="Submit" />
    </form>
  );
};

export default FormContainer;
