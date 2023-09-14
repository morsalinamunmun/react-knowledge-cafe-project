
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddBookmarks =(blog)=>{
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }
  return (
    <> 
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
