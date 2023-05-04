import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({news}) => {
    const {_id, title, author, details, image_url, total_view, rating} = news;

    return (
        <Card className="text-center mb-4">
            <Card.Header className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <Image className='me-2' width={60} height={60} roundedCircle variant="top" src={author?.img} />
                    <div>
                        <p className='text-start mb-0'> {author?.name} </p>
                        <p> <small>{author?.published_date}</small> </p>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <FaRegBookmark className='me-2' />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length > 200 ?
                        <p>{details.slice(0, 300) + '...'} <Link to={`/news/${_id}`}>Read more</Link></p>
                        :
                        <p>{details}</p>}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between mb-0">
                <span> {rating?.number} <FaStar className='text-warning' /> </span>
                <span> <FaEye /> {total_view} </span>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;