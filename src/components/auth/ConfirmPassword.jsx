import React from 'react';
import Container from '../Container';
import FormInput from '../form/FormInput';
import Submit from '../form/Submit';
import Title from '../form/Title';

const ConfirmPassword = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-primary flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-96 space-y-6">
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
    </div>
  );
};

export default ConfirmPassword;
