import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost } from '../../actions/index.js';

const mapStateToProps = state => ({
  currentPost: state.currentPost
});

const mapDispatchToProps = dispatch => ({
  getPost: (id) => dispatch(getPost(id))
});

const Post = (props) => (
  <div className={'post-container ' + props.postClass || ''}>
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
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);