import React from 'react';
import { connect } from 'react-redux';
import { loadMore } from '../../actions/index.js';
import Post from '../Post/Post.js';
import './List.css';

const mapStateToProps = state => ({
  posts: state.posts,
  pageSize: state.pageSize
});

const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch(loadMore())
});

const List = (props) => (
  <div>
    <div className='list-container'>
      <div className='posts-container'>
        { props.posts.slice(0, props.pageSize).map((post, idx) => 
          <Post 
            title={post.title}
            author={post.author}
            tags={post.tags}
            id={post.id}
            key={post.id} 
            content={post.content}
            postClass={'list-post'}
          />
        )}
      </div>
      
    </div>
    <button onClick={props.loadMore}>Load More</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);