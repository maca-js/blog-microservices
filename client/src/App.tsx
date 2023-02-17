import Container from '@mui/material/Container'
import React from 'react'
import PostCreate from './components/PostCreate'
import PostList from './components/PostLIst'

function App() {
  return (
    <Container maxWidth="sm">
      <PostCreate />
      <PostList />
    </Container>
  )
}

export default App
