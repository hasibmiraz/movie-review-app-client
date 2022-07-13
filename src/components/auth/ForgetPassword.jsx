import React from 'react';
import { commonModalClasses } from '../../utilities/theme';
import Container from '../Container';
import CustomLink from '../CustomLink';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';

const ForgetPassword = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses}>
          <Title>Please enter your email</Title>
          <FormInput
            name="email"
            type="email"
            placeholder="example@email.com"
            label="Email"
          />
          <Submit value="Send Link" />
          <div className="flex justify-between text-dark-subtle">
            <CustomLink to="/auth/signin">Sign in</CustomLink>
            <CustomLink to="/auth/signup">Sign up</CustomLink>
          </div>
        </form>
      </Container>
    </FormContainer>
  );
};

export default ForgetPassword;
