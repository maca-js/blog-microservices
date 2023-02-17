import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

type Posts = {
  [id: string]: {
    id: string
    title: string
  }
}

const PostList = () => {
  const [posts, setPosts] = useState<Posts>({})

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts')

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
        </Card>
      ))}
    </>
  )
}

export default PostList
