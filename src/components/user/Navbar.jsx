import React from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Container from '../Container';

const Navbar = () => {
  return (
    <div className="bg-secondary shadow-sm shadow-gray-500">
      <Container className="p-2">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src="logo.png" alt="" className="h-10" />
          </Link>
          <ul className="flex items-center space-x-3">
            <li>
              <button className="bg-dark-subtle p-1 rounded">
                <MdOutlineLightMode className="text-white" size={24} />
              </button>
            </li>
            <li>
              <input
                type="text"
                className="border-2 border-dark-subtle p-1 bg-transparent rounded text-xl outline-none focus:border-white text-white transition duration-300"
                placeholder="Search..."
              />
            </li>
            <Link to="/auth/signin">
              <li className="text-white font-semibold text-lg">Login</li>
            </Link>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
