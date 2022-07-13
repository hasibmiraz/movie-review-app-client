import React from 'react';

const Submit = ({ value }) => {
  return (
    <input
      type="submit"
      value={value}
      className="w-full dark:bg-white bg-secondary dark:text-secondary text-white rounded text-lg cursor-pointer font-semibold py-1 transition duration-200 hover:scale-95 hover:bg-opacity-90"
    />
  );
};

export default Submit;
