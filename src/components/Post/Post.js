import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost } from '../../actions/index.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import soccer from '../../images/header-image.jpg';

const mapStateToProps = state => ({
  currentPost: state.currentPost
});

const mapDispatchToProps = dispatch => ({
  getPost: (id) => dispatch(getPost(id))
});

const Post = (props) => (
  <div className={'card post-container ' + props.postClass || ''}>
    <LazyLoadImage
      alt={'Header image'}
      height={'auto'}
      src={props.image || soccer}
      width={'100%'} />
    <div className='description-container'>
    <Link 
      to={`/posts/${props.id}`}
      onClick={() => props.getPost(props.id)}
    >
      <h1>{props.title}</h1>
    </Link>
    <h3>
      {props.author}
    </h3>
    <p>{props.content}</p>
    
    <ul>
      <i className='fas fa-inbox'></i>
      {props.tags.map((tag, idx) => <li key={idx}>{tag}</li>)}
    </ul>
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);