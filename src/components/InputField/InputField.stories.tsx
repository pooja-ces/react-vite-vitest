import { Meta, StoryObj } from "@storybook/react";
import InputField from "../../components/InputField/InputField";

const mockFormData = {
  name: "John Doe",
  email: "johndoe@example.com",
  password: "password123",
  acceptTerms: true,
  role: "Admin",
};

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    onChange: { action: "changed" },
  },
};

export default meta;

export const Default: StoryObj<typeof InputField> = {
  args: {
    label: "Name",
    name: "name",
    type: "text",
    value: mockFormData.name,
  },
};

export const Email: StoryObj<typeof InputField> = {
  args: {
    label: "Email",
    name: "email",
    type: "email",
    value: mockFormData.email,
  },
};

export const Password: StoryObj<typeof InputField> = {
  args: {
    label: "Password",
    name: "password",
    type: "password",
    value: mockFormData.password,
  },
};

export const Checkbox: StoryObj<typeof InputField> = {
  args: {
    label: "Accept Terms",
    name: "acceptTerms",
    type: "checkbox",
    value: mockFormData.acceptTerms,
  },
};

export const Select: StoryObj<typeof InputField> = {
  args: {
    label: "Role",
    name: "role",
    type: "select",
    value: mockFormData.role,
    options: ["Admin", "User", "Guest"],
  },
};

export const Radio: StoryObj<typeof InputField> = {
  args: {
    label: "Role",
    name: "role",
    type: "radio",
    value: mockFormData.role,
    options: ["Admin", "User", "Guest"],
  },
};
