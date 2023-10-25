import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';


const EmailPass = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (

    <Container fluid name="Form Container" className="d-flex flex-column align-items-center justify-content-md-center">
      <Row name="containingRow" style={{ width: "90%" }}>
        <Col xl={5} name="SignUp column">

{/*SIGN UP PORTION OF THE PAGE*/}
          <Form className="d-flex flex-column align-items-center justify-content-md-center input-form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign Up</h1>
            <br></br>
            <Row style={{ width: "100%" }}>
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
            </Row>

            {/*This is the password group for account creation. */}
            <Row style={{ width: "100%" }}>
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
            </Row>

            {/*This is the password retype. Checks with the original password entry to grant entry. */}
            <Row style={{ width: "100%" }}>
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
                      message: 'Password should match the original'
                    }
                  })}
                  className={`${errors.user_password_retype ? 'input-error' : ''}`}
                />
                {errors.user_password && (
                  <p className="errorMsg">{errors.user_password_retype.message}</p>
                )}
              </Form.Group>
            </Row>

            <Row className='d-flex' style={{ alignItems: "center", padding: "15px", width: "80%" }}>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Row>
          </Form>


        </Col>


        <Col className="d-flex flex-direction-column align-items-center justify-content-md-center" xl={2} >
          <p>OR</p>
        </Col>

        {/* EVERYTHIGN BELOW IS FOR THE LOG IN COLUMN */}
        <Col style={{ alignItems: "center" }} xl={5} name="SignIn Column">
          <Form className="d-flex flex-column align-items-center justify-content-md-center input-form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign In</h1>
            <br></br>
            <Row style={{ width: "100%" }}>
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
            </Row>

            {/*This is the password group for login. */}
            <Row style={{ width: "100%" }}>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="user_password"
                  placeholder="Enter your Password"
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
            </Row>
            <Row style={{height : "72px"}}>
            </Row>
            <Row className='d-flex' style={{ alignItems: "center", padding: "15px", width: "80%" }}>
              <Button variant="secondary" type="submit">
                Log In
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>


    </Container>

  );
};

export default EmailPass;
