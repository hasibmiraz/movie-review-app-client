import React from 'react';
import Container from '../Container';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';
import CustomLink from '../CustomLink';
import { commonModalClasses } from '../../utilities/theme';
import FormContainer from '../form/FormContainer';

const Signin = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses}>
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
    </FormContainer>
  );
};

export default Signin;
