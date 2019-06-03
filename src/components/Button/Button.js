import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.fetchData = this.fetchData.bind(this);
  }
  

  fetchData() {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
      this.props.loadMore();
    }, 1200);
  }

  render() {
    const { loading } = this.state;

    return (
      <span className='button-container'>
        { this.props.pageSize < this.props.postLen ? 
          <button className='btn' onClick={this.fetchData} disabled={loading}>
            {loading && <span>Loading Posts</span>}
            {!loading && <span>Load More</span>}
          </button>
          :
          <span className='no-posts-left'>No more posts 🎉</span>
        }
       
      </span>
    );
  }
}

export default Button;