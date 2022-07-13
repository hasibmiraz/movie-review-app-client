import React from 'react';

const FormInput = ({ name, type, placeholder, label, ...rest }) => {
  return (
    <div className="flex flex-col-reverse">
      <input
        id={name}
        type={type}
        name={name}
        className="bg-transparent rounded border-2 border-light-subtle dark:border-dark-subtle w-full text-lg outline-none focus:border-primary dark:focus:border-white py-1 px-2 dark:text-white text-primary peer"
        placeholder={placeholder}
        {...rest}
      />
      <label
        htmlFor={name}
        className="dark:text-dark-subtle text-light-subtle font-semibold dark:peer-focus:text-white peer-focus:text-primary transition duration-200 self-start mb-1"
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
