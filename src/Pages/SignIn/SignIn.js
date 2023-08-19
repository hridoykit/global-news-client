import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignIn = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const {userSignIn} = useContext(AuthContext);
    
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = e => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        userSignIn(email, password)
            .then(res => {
                const user = res.user;
                e.target.reset();
                setErrorMsg(' '); //clean err message after newly log in
                // navigate('/');
                
                if (user.emailVerified){
                    navigate(from, {replace: true});
                }
                else {
                    toast.warning("your email isnt verified")
            })
            .catch(err => {
                console.error(err);
                setErrorMsg(err.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
            
            <Form.Text className="text-danger ms-2">
                {errorMsg}
            </Form.Text>
        </Form>
  );
};

export default SignIn;
