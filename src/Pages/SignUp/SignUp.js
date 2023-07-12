
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    
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
                setErrorMsg('');

                // handleUpdateProfile(name, photo);
                updateUserProfile({
                    displayName: name,
                    photoURL: photo
                    })
                    .then(() => {})
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    };

    const handleCheckBox = e => {
        setIsChecked(e.target.checked);
    };

    //break profile here & call the func named updateUserProfile() 
    // const handleUpdateProfile = (name, photo) => {
    //     const profile = {
    //         displayName: name,
    //         photoURL: photo
    //     };
    //     updateUserProfile(profile)
    //         .then(() => {})
    //         .then(error => console.error(error));
    // };

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

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleCheckBox}
                    type="checkbox"
                    label={<>Agree to <Link to='/terms'>terms and conditions</Link> </>}
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!isChecked} > Sign Up </Button>

            <Form.Text className="text-danger ms-2">
                {errorMsg}
            </Form.Text>
            
        </Form>
    );
};

export default SignUp;