import React from 'react';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import Post from './component/posts/Post';
import Categories from './component/categories/Categories';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Post/>
      <Categories/>
    </div>
  );
}

export default App;
