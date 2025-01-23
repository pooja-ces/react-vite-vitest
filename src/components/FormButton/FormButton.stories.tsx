import { Meta, StoryFn } from '@storybook/react';
import FormButton from './FormButton';

export default {
  title: 'Components/FormButton',
  component: FormButton,
} as Meta;

const Template: StoryFn<typeof FormButton> = (args) => <FormButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
};

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  label: 'Submit',
  type: 'submit',
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked!'),
};

export const WithAriaLabel = Template.bind({});
WithAriaLabel.args = {
  label: 'Submit',
  ariaLabel: 'Submit Form',
};
