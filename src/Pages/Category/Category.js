import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    // console.log(categoryNews);
    
    return (
        <div>
            <h3>bivinno gategory: {categoryNews.length}</h3>
            {
                categoryNews.map(news => <NewsSummaryCard key={news._id} news={news} />)
            }
        </div>
    );
};

export default Category;