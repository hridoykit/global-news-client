import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    
    return (
        <div>
            <h3>this is home, place for ghum: {allNews.length}</h3>
            {
                allNews.map(news => <NewsSummaryCard key={news._id} news={news} />)
            }
        </div>
    );
};

export default Home;