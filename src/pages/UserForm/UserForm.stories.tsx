import { Meta, StoryFn } from '@storybook/react';
import UserForm from '../UserForm/UserForm';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Pages/UserForm',
  component: UserForm,
  parameters: {
    layout: 'centered',
  },
  loaders: [
    async () => {
      return {
        mockFormData: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          password: 'password123',
        },
      };
    },
  ],
} as Meta;

const Template: StoryFn<typeof UserForm> = (args, { loaded }) => {
  const { mockFormData } = loaded;
  console.log('Loaded mock data:', mockFormData);
  return <UserForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'User Form';

Default.play = async ({ canvasElement, loaded }) => {
  const canvas = within(canvasElement);
  const { mockFormData } = loaded;

  const nameInput = await canvas.findByLabelText('Name');
  userEvent.type(nameInput, mockFormData.name);

  const emailInput = await canvas.findByLabelText('Email');
  userEvent.type(emailInput, mockFormData.email);

  const passwordInput = await canvas.findByLabelText('Password');
  userEvent.type(passwordInput, mockFormData.password);

  const submitButton = await canvas.findByRole('button', { name: /submit/i });
  userEvent.click(submitButton);
};
