import React from 'react';
import { Link } from 'react-router-dom';
import './LatestPost.css';

const LatestPost = (props) => (
  <div className='latestpost-container'>
    <span className='latestpost-image'>
      <img src={props.post.image} style={{
        backgroundImage: `url(${props.post.image})`,
        height: '100vh',
        width: '100%'
      }}/>
      
    </span>
    <div className='latestpost-info'>
      <Link 
        to={`/posts/${props.post.id}`}
        onClick={() => props.getPost(props.post.id)}
        className='latestpost-link'
      >
        <h1>{props.post.title.toLowerCase()}</h1>
      </Link>
      <h4>// {props.post.author} </h4>
      <Link 
        to={`/posts/${props.post.id}`}
        onClick={() => props.getPost(props.post.id)}
        className='latestpost-link'
      >
        <button className='btn'>
          Read More
        </button>
      </Link>
    </div>
  </div>
);

export default LatestPost;