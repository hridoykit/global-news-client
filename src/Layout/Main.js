import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <>
        <Header />
        <Container className='mt-4'>
            <Row>
                <Col lg='2' className='d-none d-lg-block'>
                    <LeftSideNav />
                </Col>
                <Col lg='7'>
                    <Outlet />
                </Col>
                <Col lg='3'>
                    <RightSideNav />
                </Col>
            </Row>
        </Container>  
        </>
    );
};

export default Main;