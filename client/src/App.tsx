import React from 'react'
import Container from '@mui/material/Container'
import PostCreate from './components/PostCreate'
import PostList from './components/PostList'

function App() {
  return (
    <Container maxWidth="sm">
      <PostCreate />
      <PostList />
    </Container>
  )
}

export default App
