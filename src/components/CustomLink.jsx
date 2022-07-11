import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, children }) => {
  return (
    <Link className="hover:text-white duration-200" to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;
