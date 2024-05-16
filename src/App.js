import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import LeftComp from './components/LeftComp'
import MiddleComp from './components/MiddleComp'
import RightComp from './components/RightComp'

const App = () => {


  const [bookmarks, setBookmarks] = useState(0)

  return (
    <>
      <Navbar/>
      <main>
        <div className="container">
          <LeftComp bookmarks={bookmarks}/>
          <MiddleComp setBookmarks={setBookmarks}/>
          <RightComp/>
        </div>
      </main>
    </>
  )
}

export default App
