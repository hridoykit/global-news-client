import React from 'react';
import { Button, ButtonGroup, Carousel, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaWhatsapp } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <>
            <ButtonGroup vertical>
                <Button className='mb-2 justify-content-center' variant="outline-primary"><FaGoogle /> Login with Google</Button>
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

            <div className='mt-4'>
                <h5>Our Partners</h5>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
         </>
    );
};

export default RightSideNav;