import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const singleNews = useLoaderData();
    const {title, image_url, details, category_id} = singleNews;

    return (
        <div>
            <h2>new news {singleNews.length} </h2>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All news in this category </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;