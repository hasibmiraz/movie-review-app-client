import React from 'react';

const Title = ({ children }) => {
  return (
    <h1 className="text-xl text-secondary dark:text-white font-semibold text-center">
      {children}
    </h1>
  );
};

export default Title;
