import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blog = () => {

    const blogs = useLoaderData();
    console.log(blogs);

    return (
        <div className='container text-white p-4' style={{ background: '#03031824' }}>
            <h1 className='text-white mb-5'>Quewtion And Answers</h1>
            <div>
                {
                    blogs.data.map(blog => <BlogCard
                    key={blog._id}
                    blog={blog}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blog;