
import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleCheckName = (e) => {
    if (e.length < 2) {
      setNameError('Name is short');
    } else {
      setName(e);
      setNameError('');
    }
  };

  const handleCheckEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(e)) {
      setEmailError('Email is invalid');
    } else {
      setEmail(e);
      setEmailError('');
    }
  };

  const handleCheckPassword = (e) => {
    if (e.length < 8) {
      setPasswordError('Password should be at least 8 characters long');
    } else {
      setPassword(e);
      setPasswordError('');
    }
  };

  const handleCheckConfirmPassword = (e) => {
    if (e !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPassword(e);
      setConfirmPasswordError('');
    }
  };

  const handleSignup = () => {
    if (name.length < 3) {
      alert('Username should be at least 3 characters long');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address');
    } else if (password.length < 6) {
      alert('Password should be at least 6 characters long');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      alert('Signup Successful');
    }
  };

  return (
    <div className="flex flex-col items-center m-auto justify-center mt-20 space-y-5 h-full">
      <h1 className="text-3xl font-bold text-blue-700">Sign Up</h1>
      <InputField
        type="text"
        placeholder="Username"
        onChange={(e) => handleCheckName(e.target.value)}
        error={nameError}
      />
      <InputField
        type="email"
        placeholder="Email"
        onChange={(e) => handleCheckEmail(e.target.value)}
        error={emailError}
      />
      <InputField
        type="password"
        placeholder="Password"
        onChange={(e) => handleCheckPassword(e.target.value)}
        error={passwordError}
      />
      <InputField
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => handleCheckConfirmPassword(e.target.value)}
        error={confirmPasswordError}
      />
      <Button onClick={handleSignup}>Sign up</Button>
    </div>
  );
};

export default SignupForm;