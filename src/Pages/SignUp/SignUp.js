
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        // const photo = e.target.file.value;
        const photo = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(res => {
                const user = res.user;
                e.target.reset();
            })
            .catch(err => console.error(err));
    };

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter name" />
            </Form.Group>

            {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control name="file" type="file" />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Profile Photo</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Photo url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit"> Sign Up </Button>
            
        </Form>
    );
};

export default SignUp;