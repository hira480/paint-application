import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Login.css'

const Login = () => {



    const loginButton = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

    }

    return (
        <div>
            <div className='container form-width form-layout'>
                <Form onSubmit={loginButton}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;