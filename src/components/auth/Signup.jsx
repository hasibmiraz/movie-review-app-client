import React, { useState } from 'react';
import { createUser } from '../../api/auth';
import { commonModalClasses } from '../../utilities/theme';
import Container from '../Container';
import CustomLink from '../CustomLink';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';

const validateUserInfo = ({ name, email, password }) => {
  const isValidEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const isValidName = /^[a-z A-Z]/;

  if (!name.trim()) return { ok: false, error: 'Name is missing' };
  if (!isValidName.test(name)) return { ok: false, error: 'Invalid name' };

  if (!email.trim()) return { ok: false, error: 'Email is missing' };
  if (!isValidEmail.test(email)) return { ok: false, error: 'Invalid email' };

  if (!password.trim()) return { ok: false, error: 'Password is missing' };
  if (password.length < 8)
    return { ok: false, error: 'Password must be atleast 8 characters' };
  if (name && email && password) return { ok: true, error: 'No error!' };
};

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, error } = validateUserInfo(userInfo);
    if (!ok) return console.log(error);
    const response = await createUser(userInfo);
    if (response.error) return console.log(response.error);
    console.log(response.user);
  };

  const { name, email, password } = userInfo;

  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={commonModalClasses}>
          <Title>Sign up</Title>
          <FormInput
            name="name"
            type="name"
            onChange={handleChange}
            value={name}
            placeholder="Name"
            label="Name"
          />
          <FormInput
            name="email"
            type="email"
            onChange={handleChange}
            value={email}
            placeholder="hasib@email.com"
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
            placeholder="********"
            label="Password"
          />
          <Submit value="Sign Up" />
          <div className="flex justify-between text-dark-subtle">
            <CustomLink to="/auth/forget-password">Forgot password?</CustomLink>
            <CustomLink to="/auth/signin">Sign in</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};

export default Signup;
