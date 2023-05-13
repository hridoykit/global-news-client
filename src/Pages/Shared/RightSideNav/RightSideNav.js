import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from 'react';
import { Button, ButtonGroup, Carousel, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaWhatsapp } from "react-icons/fa";
import img2 from '../../../assests/img/Gruppe_-38.png';
import img1 from '../../../assests/img/co-branding.jpg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const googleProvider = new GoogleAuthProvider();

const RightSideNav = () => {
    
    const {loginWithGoogle} = useContext(AuthContext);

    const handleLoginWithGoogle = () => {
        loginWithGoogle(googleProvider)
            .then(res =>{
                const user = res.user;
                console.log(user);
            })
            .catch(err =>{
                console.error(err);
            })
    }

    return (
        <div className="sticky-top">
            <ButtonGroup vertical>
                <Button onClick={handleLoginWithGoogle} className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login with Github</Button>
            </ButtonGroup>

            {/* <-----Find us section-----> */}

            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'>
                        <FaFacebook /> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>
                        <FaWhatsapp /> Whatsapp
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><small>Know our Terms and Conditions</small></ListGroup.Item>
                </ListGroup>
            </div>

            {/* <-----brand carousel section-----> */}

            <div className='mt-4 mb-4'>
                <h5>Our Partners</h5>
                <Carousel className='carousel-inner rounded-6' fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
         </div>
    );
};

export default RightSideNav;