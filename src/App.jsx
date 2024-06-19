import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider from './store/post-list-store'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectedTab] = useState('Home')

  return (
    <PostListProvider>
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="content">
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  )
}

export default App
