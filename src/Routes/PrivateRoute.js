import React, { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return (
            <>
               <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...
            </>
        );
    };

    if(!user){
        return <Navigate to="/signin" state={{ from : location }} replace />
    }
    return children;
};

export default PrivateRoute;