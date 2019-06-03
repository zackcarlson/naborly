import React from 'react';
import List from '../List/List.js';
import Post from '../Post/Post.js';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  posts: state.posts,
  currentPost: state.currentPost
});

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={List}/>
    <Route path='/posts/:id' render={() => (
      <Post
        title={props.currentPost.title}
        content={props.currentPost.content}
        author={props.currentPost.author}
        tags={props.currentPost.tags}
        id={props.currentPost.id}
        image={props.currentPost.image}
      />
    )}/>
  </Switch>
);

export default connect(
  mapStateToProps
)(Routes);