import React from 'react';
import { connect } from 'react-redux';
import { loadMore, getPost } from '../../actions/index.js';
import LatestPost from '../LatestPost/LatestPost.js';
import Post from '../Post/Post.js';
import Button from '../Button/Button.js';
import Scroll from '../Scroll/Scroll.js';
import './List.css';

const mapStateToProps = state => ({
  posts: state.posts,
  pageSize: state.pageSize,
  currentPost: state.currentPost
});

const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch(loadMore()),
  getPost: (id) => dispatch(getPost(id))
});

const List = (props) => (
  <div>
    <LatestPost post={props.posts[0]} getPost={props.getPost}/>
    <header className='list-header-container'>
      <h1>Moving Up</h1>
      <h4>Stories and ideas for landlords and tenants.</h4>
    </header>
    <div className='list-container'>
      <div className='posts-container'>
        { props.posts.slice(1, props.pageSize).map((post, idx) => 
          <Post 
            title={post.title}
            author={post.author}
            tags={post.tags}
            id={post.id}
            key={post.id} 
            content={post.content}
            postClass={'list-post'}
            image={post.image}
            getPost={props.getPost}
            listOfPosts={true}
          />
        )}
      </div>
    </div>
    <Scroll/>
    <Button loadMore={props.loadMore} pageSize={props.pageSize} postLen={props.posts.length}/>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);