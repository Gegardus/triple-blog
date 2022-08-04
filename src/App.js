import React, { Component } from 'react';
import './App.css';
import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils'

class App extends Component {

  state = {
    showBlogs: true,
    blogArr: [ 
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
      countLikes: 0,
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
      countLikes: 0,
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
      countLikes: 0,
    }
  ]
  }

  addLikeOnClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObject = updatedBlogList[pos];
    updatedBlogObject.countLikes = updatedBlogObject.countLikes + 1;
    updatedBlogList[pos] = updatedBlogObject;
    this.setState({blogArr: updatedBlogList});
    console.log(updatedBlogObject);
  }

  hideOnClick = () => {  
    // let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => { 
      return {showBlogs: !prevState.showBlogs }
    });    
    
    console.log(this.showBlogs)
  }

  render() {
    console.log('Render called')
    console.log(this.state)
    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {       
      return (
        <BlogCard className={'BlogCard'} key={pos} title={item.title} description={item.description} 
                 countLikes={item.countLikes} id={item.id} addLikeOnClick={() => 
                  this.addLikeOnClick(pos)} />      
      )
    })

  return (
    <div className="App">
      <button onClick={this.hideOnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
      <br></br>
      { this.state.showBlogs ? blogCards : null }
    </div>
  );
  }
}

export default App;
