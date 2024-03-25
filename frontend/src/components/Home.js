import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [createBlog, setCreateBlog] = useState(false);
  const [blogData, setBlogData] = useState({ title: '', description: '' });

  const fetchAllBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/blogs');
      setBlogs(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const handleCreateNewPost = async (e) => {
    try {
      e.preventDefault();
      const headers = { 'Authorization': `Bearer ${sessionStorage.getItem('token')}` };
      const response = await axios.post('http://localhost:3001/api/blogs', blogData, { headers });
      alert('blog created!');
      setBlogs(prevBlogs => [...prevBlogs, response.data]);
      setCreateBlog(false);
    } catch (err) {
      console.log(err);
    }
  };

  const renderCreateBlogForm = () => {
    return (
      <>
        <div className='card1' onClick={() => setCreateBlog(false)}></div>
        <div className='card2'></div>
        <span className='target' role='button' onClick={() => setCreateBlog(false)}>x</span>
        <div className='create-post'>
          <h4>Create Blog</h4>
          <form onSubmit={e => handleCreateNewPost(e)}>
            <div className='mb-3'>
              <input type='text' className='form-control' placeholder='Title' onChange={e => setBlogData({ ...blogData, title: e.target.value })} />
            </div>
            <div className='mb-3'>
              <textarea className='form-control' cols='5' rows='10' placeholder='description' style={{ resize: 'none' }}
                onChange={e => setBlogData({ ...blogData, description: e.target.value })}></textarea>
            </div>
            <button className='btn btn-primary' type='submit'>Create</button>
          </form>
        </div>
      </>
    );
  };

  return (
    <div className='mt-3'>
      <button className='btn bg-secondary text-white' onClick={() => setCreateBlog(true)}>Create Blog</button>
      <div className='row blogs'>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className='col'>
              <div className='bg-light'>
                <h3 className='post-title'>{blog.title}</h3>
                <h3 className='post-decription'>{blog.description}</h3>
              </div>
            </div>
          ))
        ) : (
            <div>No blogs found.</div>
          )}
        {createBlog && renderCreateBlogForm()}
      </div>
    </div>
  );
}

export default Home;
