import React from 'react';
import { commonModalClasses } from '../../utilities/theme';
import Container from '../Container';
import FormContainer from '../form/FormContainer';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';

const ConfirmPassword = () => {
  return (
    <FormContainer>
      <Container>
        <form className={commonModalClasses}>
          <Title>Enter New Password</Title>
          <FormInput
            name="new-password"
            type="password"
            placeholder="********"
            label="New Password"
            autoComplete="on"
          />
          <FormInput
            name="retype-new-password"
            type="password"
            placeholder="********"
            label="Confirm Password"
            autoComplete="on"
          />
          <Submit value="Reset Password" />
        </form>
      </Container>
    </FormContainer>
  );
};

export default ConfirmPassword;
