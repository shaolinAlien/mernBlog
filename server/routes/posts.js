import {Router} from 'express'
import { createPost, getAll } from '../controllers/posts.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = new Router()

//Create Post
//http://localhost:3002/api/posts
//Логика запроса осуществляется в функции регистр в контроллере ауф
router.post('/', checkAuth, createPost )

//Get All Posts
//http://localhost:3002/api/posts
//Логика запроса осуществляется в функции регистр в контроллере ауф
router.get('/', getAll )

export default router
