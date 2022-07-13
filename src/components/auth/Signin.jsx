import React from 'react';
import Container from '../Container';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';
import CustomLink from '../CustomLink';

const Signin = () => {
  return (
    <div className="fixed inset-0 -z-10 flex justify-center items-center bg-white dark:bg-primary">
      <Container>
        <form className="dark:bg-secondary rounded p-6 w-96 space-y-6 shadow-lg">
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
          <div className="flex justify-between">
            <CustomLink to="/auth/forget-password">Forgot password?</CustomLink>
            <CustomLink to="/auth/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signin;
