import React from 'react';

const Submit = ({ value }) => {
  return (
    <input
      type="submit"
      value={value}
      className="w-full bg-white text-secondary rounded text-lg cursor-pointer font-semibold py-1 transition duration-200 hover:scale-95 hover:bg-opacity-90"
    />
  );
};

export default Submit;
