import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const EmailPass = (props) => {
  const { register, handleSubmit, formState : {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="first_name">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            autoComplete="off"
            {...register("user_email", {
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.'
              }
            })}
            className={`${errors.user_email ? 'input-error' : ''}`}
          />
          {errors.user_email && (
            <p className="errorMsg">{errors.user_email.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="user_password"
            placeholder="Choose a password"
            autoComplete="off"
            {...register("user_password", {
              required: 'Password is required.',
              minLength: {
                value: 9,
                message: 'Password should have at least 9 characters.'
              }
            })}
            className={`${errors.user_password ? 'input-error' : ''}`}
          />
          {errors.user_password && (
            <p className="errorMsg">{errors.user_password.message}</p>
          )}
        </Form.Group>


        <Form.Group controlId="password_retype">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="user_password_retype"
            placeholder="Please Retype The Initial Password"
            autoComplete="off"
            {...register("user_password_retype", {
              required: 'Password is required.',
              minLength: {
                value: 9,
                message: 'Password should have at least 9 characters.'
              }
            })}
            className={`${errors.user_password_retype ? 'input-error' : ''}`}
          />
          {errors.user_password && (
            <p className="errorMsg">{errors.user_password_retype.message}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default EmailPass;
