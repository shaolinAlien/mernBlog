import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../utils/axios'
import { PostItem } from '../components/PostItem'

export const PostsPage = () => {

  const [posts, setPosts] = useState([])

  const fetchMyPosts = async () => {
    try {
      const { data } = await axios.get('/posts/user/me')
      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMyPosts()
  }, [])

  return (
    <div className="w1/2 mx-auto px-10 py-10 flex flex-col gap-10">
      {posts?.map((post, idx) => (
        <PostItem post={post} key={idx} />
      ))}
    </div>
  )
}
