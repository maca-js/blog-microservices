import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CommentCreate from './CommentCreate'
import CommentList, { Comment } from './CommentList'

type Posts = {
  [id: string]: {
    id: string
    title: string
    comments: Comment[]
  }
}

const PostList = () => {
  const [posts, setPosts] = useState<Posts>({})

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts')

    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      {Object.values(posts).map((post) => (
        <Card className="card" key={post.id}>
          <CardHeader title={post.title} />
          <CardContent>
            <CommentList comments={post.comments} />
            <CommentCreate postId={post.id} />
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default PostList
