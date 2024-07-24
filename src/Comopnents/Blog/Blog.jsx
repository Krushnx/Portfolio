import React, { useEffect, useState } from 'react';
import './blog.css';
import axios from 'axios';

function Blog() {
    const [data, setData] = useState();

    // fetching get data in useEffect and setting data using axios
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blog/get');
                setData(response.data);
                console.log("data-->", response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    // date formatter july 24, 2024
    const dateFormater = (date) => {
        const newDate = new Date(date);
        const month = newDate.toLocaleString('default', { month: 'long' });
        const day = newDate.getDate();
        const year = newDate.getFullYear();
        return `${month} ${day}, ${year}`;
    };

    function Tagformat(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    

    return (
        <div>
            <h1 className='blog-title'>My Blogs</h1>
            <p className='blog-subtitle'>Exploring Ideas, Sharing Insights, and Navigating the Digital Landscape</p>
            {data && (
                <div className="blogs">
                    {data.map((item) => (
                        <div className="blog" key={item.id}>
                            <div className="blog-topline flexrow">
                                <p className='date'>{dateFormater(item.date)}</p>
                                <div className="flexrow">
                                    <div className="blog-tag">{Tagformat(item.tags[0])}</div>
                                    <div className="blog-tag">{Tagformat(item.tags[1])}</div>
                                </div>
                            </div>

                            <div className="blog-head">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <a href="/">Read More &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Blog;
