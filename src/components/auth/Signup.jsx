import React from 'react';
import { commonModalClasses } from '../../utilities/theme';
import Container from '../Container';
import CustomLink from '../CustomLink';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';

const Signin = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses}>
          <Title>Sign up</Title>
          <FormInput name="name" type="name" placeholder="Name" label="Name" />
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

export default Signin;
