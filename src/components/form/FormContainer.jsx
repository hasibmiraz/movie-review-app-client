import React from 'react';

const FormContainer = ({ children }) => {
  return (
    <div className="fixed inset-0 -z-10 dark:bg-primary flex justify-center items-center">
      {children}
    </div>
  );
};

export default FormContainer;
