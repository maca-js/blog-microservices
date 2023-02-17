import React, { useState, FormEvent } from 'react'
import axios from 'axios'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'

const CommentCreate = ({ postId }: { postId: string }) => {
  const [content, setContent] = useState('')

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    })

    setContent('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          label="New Comment"
          onChange={(e) => setContent(e.target.value)}
          fullWidth
        />
        <Button variant="contained" type="submit">
          Add comment
        </Button>
      </form>
    </div>
  )
}

export default CommentCreate
