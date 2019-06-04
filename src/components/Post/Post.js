import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Social from '../Social/Social.js';

const Post = (props) => (
  <div className={'card post-container ' + props.postClass || ''}>
      {props.listOfPosts ? 
        <div className='plural-post-container'>
          <LazyLoadImage
            height={'auto'}
            width={'100%'}
            alt={'Header image'}
            src={props.image} 
          />
          <div className='description-container'>
            <Link 
              to={`/posts/${props.id}`}
              onClick={() => props.getPost(props.id)}
              className='link-to-post'
            >
              <h2>{props.title.toLowerCase()}</h2>
            </Link>
            <h4> {props.author} </h4>
            <p>{props.content}</p>
            <ul>
              <i className='fas fa-inbox'></i>
              {props.tags.map((tag, idx) => <li key={idx}>{tag}</li>)}
            </ul>
          </div>
        </div>
        :
        <div className='singular-post-container'>
          <h1>{props.title.toLowerCase()}</h1>
          <h3 className='summary-container'>
            <span className='summary-tldr'>TLDR:</span>
            <span className='summary-text'>
              Lorem ipsum is a pseudo-Latin text used in web design, typography, 
              layout, and printing in place of English to emphasise design elements 
              over content.
            </span>
            
          </h3>
          <h4 className='author-container'> // {props.author.toLowerCase()} </h4>
          <LazyLoadImage
            alt={'Header image'}
            height={'auto'}
            src={props.image}
            width={'75%'} 
          />
          <p className='content-container'>{props.content}</p>
          <Social/>
        </div>
      } 
  </div>
);

export default Post;