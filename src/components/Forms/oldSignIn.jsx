import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
//import {useForm} from 'react-hook-dom';

//const loginController = require('../../server/controllers/loginController.js');

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');

  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password); // DEBUG ONLY REMOVE FOR PRODUCTION

        
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const value = e.target.value;

    }

    const onSubmit = (data) => {
        console.log(data); //DEBUG ONLY
    }


    return (
        <Form onSubmit = {handleSubmit(onSubmit)} method='POST'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" minLength={8}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

module.exports = Login;