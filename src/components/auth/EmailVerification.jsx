import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from '../Container';
import FormContainer from '../form/FormContainer';
import Submit from '../form/Submit';
import Title from '../form/Title';

const EmailVerification = () => {
  const otpLength = 6;
  const [otp, setOtp] = useState(new Array(otpLength).fill(''));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const inputRef = useRef();

  const { state } = useLocation();
  const user = state?.user;

  const navigate = useNavigate();

  const focusNextInputField = (index) => {
    setActiveOtpIndex(index + 1);
  };

  const focusPrevInputField = (index) => {
    let nextIndex;
    const diff = index - 1;
    nextIndex = diff !== 0 ? diff : 0;
    setActiveOtpIndex(nextIndex);
  };

  const handleOtpChange = ({ target }, index) => {
    const { value } = target;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1, value.length);
    if (!value) focusPrevInputField(index);
    else focusNextInputField(index);
    setOtp([...newOtp]);
  };

  const handleKeyDown = ({ key }, index) => {
    if (key === 'Backspace') {
      focusPrevInputField(index + 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  useEffect(() => {
    if (!user) navigate('/not-found');
  }, [user, navigate]);

  if (!user) return null;

  return (
    <FormContainer>
      <Container>
        <form className="dark:bg-secondary bg-white rounded p-6 space-y-6 shadow-lg">
          <div>
            <Title>Please enter the OTP to verify your account</Title>
            <p className="text-center dark:text-dark-subtle text-light-subtle">
              OTP has been sent to your email
            </p>
          </div>
          <div className="flex justify-between">
            {otp.map((_, index) => (
              <input
                ref={activeOtpIndex === index ? inputRef : null}
                key={index}
                type="number"
                value={otp[index] || ''}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 border-2 dark:border-dark-subtle border-light-subtle bg-transparent rounded dark:text-white text-primary text-center dark:focus:border-white focus:border-primary outline-none text-lg font-semibold otpNumber"
              />
            ))}
          </div>
          <Submit value="Verify Account" />
        </form>
      </Container>
    </FormContainer>
  );
};

export default EmailVerification;
