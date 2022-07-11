import React from 'react';
import Container from '../Container';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';

const Signin = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-primary flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-72 space-y-6">
          <Title>Sign in</Title>
          <FormInput
            name="email"
            type="email"
            placeholder="hasib@email.com"
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            placeholder="********"
            label="Password"
          />
          <Submit value="Sign In" />
          <div className="flex justify-between text-dark-subtle">
            <a className="hover:text-white duration-200" href="!@">
              Forgot password?
            </a>
            <a className="hover:text-white duration-200" href="!@">
              Sign up
            </a>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signin;
