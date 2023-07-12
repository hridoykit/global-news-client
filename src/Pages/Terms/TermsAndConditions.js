import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    
    return (
        <div>
            <h2>here is terms and bohut conditions: </h2>
            <p>1) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, distinctio.</p>
            <p>2) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, facilis repudiandae. Obcaecati id fugit aliquid expedita omnis earum corrupti suscipit.</p>
            <p>3) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum eius optio suscipit, iusto fuga explicabo similique esse non, repellat laboriosam ipsa atque aliquid incidunt obcaecati illum doloremque accusantium dolorum quibusdam?</p>

            <>
                back to <Link className='text-decoration-none' to='/signup'>Signup</Link>
            </>
        </div>
    );
};

export default TermsAndConditions;