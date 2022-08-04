
// function App() {
//     const firstName = 'Vahan';
//     const lastName = 'Khachvankian';
//     const logo = 'Go ahead!';
//     const inputData = 'Enter Data'
//     const input = <input placeholder={inputData} autoComplete />;
//     const arr = [1, 2, 3]
//     const place = {'vahan': 'Ani'}
  
//     const getFullName = (firstName, lastName) => `${firstName} ${lastName}`
  
//     return (
//       <div className="App">
//         <h3>Full Name: { getFullName(firstName, lastName) }</h3>
//         <p>{logo}</p>   
//         { input }
//        <p> { arr[0]} </p>
//        <p> { place['vahan']} </p>
//        { arr[0] < 2 ? 'true' : 'false' }
//       </div>
//     );
//   }

// =============================================

// function App() {
//   const blogObj = {
//     title: 'Blog Title 1',
//     description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
//   }

//   const styles = {
//     margin: '16px',
//     padding: '16px',
//     boxSizing: 'border-box',
//     borderRadius: '5px',
//     boxShadow: '0 2px 5px #ccc'
//   }
  
//   return (
//     <div className="App">
//       <div style = { styles }>
//         <h3>{blogObj.title}</h3>
//         <p>{blogObj.description}</p>
//       </div>
//       <hr></hr>
//       <div style = { styles }>
//         <h3>{blogObj.title}</h3>
//         <p>{blogObj.description}</p>
//       </div>
//       <hr></hr>
//       <div style = { styles }>
//         <h3>{blogObj.title}</h3>
//         <p>{blogObj.description}</p>
//       </div>
//     </div>
//   );
// }

// =====================================

// function App() {
//     const blogObj = {
//       title: 'Blog Title 1',
//       description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
//     }
  
//     return (
//       <div className="App">
//         <div className='BlogCard'>
//           <h3>{blogObj.title}</h3>
//           <p>{blogObj.description}</p>
//         </div>
//         <hr></hr>
//         <div className='BlogCard'>
//           <h3>{blogObj.title}</h3>
//           <p>{blogObj.description}</p>
//         </div>
//         <hr></hr>
//         <div className='BlogCard'>
//           <h3>{blogObj.title}</h3>
//           <p>{blogObj.description}</p>
//         </div>
//       </div>
//     );
//   }

// ===========================================

// function App() {
//     const blogArr = [ 
//       {
//         id: 1,
//         title: 'Blog Title 1',
//         description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
//       },
//       {
//         id: 2,
//         title: 'Blog Title 2',
//         description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
//       },
//       {
//         id: 3,
//         title: 'Blog Title 3',
//         description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
//       }
//     ]
  
//     const blogCards = blogArr.map((item, pos) => {
//        console.log(item)
  
//        return (
//         <div className='BlogCard' key={item.id}>
//           <p>{item.title}</p>
//           <p>{item.description}</p>
//         </div>
//       )
//     })
  
//     return (
//       <div className="App">
//         {blogCards}
//       </div>
//     );
//   }
  
// ==========================================================

// function App() {
//     const blogArr = [ 
//       {
//         id: 1,
//         title: 'Blog Title 1',
//         description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
//       },
//       {
//         id: 2,
//         title: 'Blog Title 2',
//         description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
//       },
//       {
//         id: 3,
//         title: 'Blog Title 3',
//         description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor'
//       }
//     ]
  
//     const blogCards = isArrayEmpty(blogArr) ? [] : blogArr.map((item, pos) => {  
  
//        return (
//         <BlogCard className="Blog" key={pos} title={item.title} description={item.description} id={item.id}/>      
//       )
//     })
  
//     const hideOnClick = () => {
//       alert('Button Clicked')
//     }
  
//     return (
//       <div className="App">
//         <button onClick={hideOnClick}>Hide List</button>
//         <br></br>
//         {blogCards}
//       </div>
//     );
//   }
  
// =================================================================

// const BlogCard = (props) => {
//     dumpLogs(props)
//     return (
//         <div className={classes.BlogCard}>
//           <h3>{props.title}</h3>
//           <p>{props.descreption}</p>
//         </div>
//       )
// }
  
// ===================================================================

// class BlogCard extends Component {
//     state = {
//        likeCount: 0
//     }

//     addLike = () => {
//       this.setState((prevState, prevProps) => {
//         return {likeCount: prevState.likeCount + 1}
//       });      
//     }
    
//     render() {
//       dumpLogs(this.props)

//        return (
//         <div className={classes.BlogCard}>
//           <h3>{this.props.title}</h3>
//           <p>{this.props.descreption}</p>
          
//           <p>Likes Count: <span className={classes.likeCount}>{this.state.likeCount}</span></p>
//           <button onClick={this.addLike}>Like</button>
//         </div>
//       )
//     }
// }
