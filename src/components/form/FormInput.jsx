import React from 'react';

const FormInput = ({ name, type, placeholder, label, ...rest }) => {
  return (
    <div className="flex flex-col-reverse">
      <input
        id={name}
        type={type}
        name={name}
        className="bg-transparent rounded border-2 border-dark-subtle w-full text-lg outline-none focus:border-white py-1 px-2 text-white peer"
        placeholder={placeholder}
        {...rest}
      />
      <label
        htmlFor={name}
        className="text-dark-subtle font-semibold peer-focus:text-white transition duration-200 self-start mb-1"
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
