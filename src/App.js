import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import {db} from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <div className="app__headerLogo">CodeConnect</div>
        <img src="" alt="" className="app__headerImage" />
      </div>

      {/*{
        posts.map(post =>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }*/}

      <Post username="lalala" caption="yooo" imageUrl="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265"/>
    </div>
  );
}

export default App;
