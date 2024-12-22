import React from 'react';
import BlogCards from './blogcard';
import { Blogs } from '../../data/constants'
import "./blogStyle.css";
function Blog() {
  return (
    <div className='blogcontainer'>
        <h1 className='title'> Blogs</h1>
        <div className='blogcardcontainer'>
        { Blogs
            .map((Blogs,index) => (
              <BlogCards blog={Blogs} idx={index} />
            ))}
            
        </div>
      
    </div>
  );
}

export default Blog;
