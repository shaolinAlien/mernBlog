import {Router} from 'express'
import { createPost, getAll, getById, getMyPosts } from '../controllers/posts.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = new Router()

//Create Post
//http://localhost:3002/api/posts
//Логика запроса осуществляется в функции регистр в контроллере ауф
router.post('/', checkAuth, createPost )

//Get All Posts
//http://localhost:3002/api/posts
router.get('/', getAll )

//Get Post By Id
//http://localhost:3002/api/posts/:id
router.get('/:id', getById )

//Get My Posts
//http://localhost:3002/api/posts/user/me
router.get('/user/me', checkAuth, getMyPosts )

export default router
