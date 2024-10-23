import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMrakAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    // remove mark as read
    // console.log ('remove bookmark', id)
    const remainingBookamrk = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookamrk);

  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMrakAsRead={handleMrakAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
      
      
    </>
  )
}

export default App
