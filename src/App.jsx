
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookMarks , SetBookmark] = useState([]);
  const handleBookmark = blog => {
    const newBookMark = [...bookMarks, blog]
    SetBookmark(newBookMark);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex m-4 p-4'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
