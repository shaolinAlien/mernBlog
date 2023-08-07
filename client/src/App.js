import {Layout} from './components/Layout.jsx'
import {Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMe } from './redux/features/auth/authSlice.js'

import {MainPage} from './pages/MainPage.jsx'
import {PostsPage} from './pages/PostsPage.jsx'
import {PostPage} from './pages/PostPage.jsx'
import {AddPostPage} from './pages/AddPostPage.jsx'
import {RegisterPage} from './pages/RegisterPage.jsx'
import {LoginPage} from './pages/LoginPage.jsx'
import {EditPostPage} from './pages/EditPostPage.jsx'


function App() {

  const dispatch = useDispatch()
// при первом обновлении страницы диспатч гет ми
  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  return (
    <Layout>
      <Routes>
        <Route path = '/' element = {<MainPage />}/>
        <Route path = 'posts' element = {<PostsPage />}/>
        <Route path = ':id' element = {<PostPage />}/>
        <Route path = 'new' element = {<AddPostPage />}/>
        <Route path = ':id/edit' element = {<EditPostPage />}/>
        <Route path = 'login' element = {<LoginPage />}/>
        <Route path = 'register' element = {<RegisterPage />}/>
      </Routes>

      <ToastContainer position='bottom-right'/>
    </Layout>
  );
}

export default App;
