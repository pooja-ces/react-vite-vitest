import React from 'react';
import { FormProvider } from './contexts/FormContext';
import UserForm from './pages/UserForm/UserForm';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <FormProvider>
        <div className="App">
          <UserForm />
        </div>
      </FormProvider>
    </React.Fragment>
  );
};

export default App;
