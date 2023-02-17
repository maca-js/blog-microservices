import React, { useState, FormEvent } from 'react'
import axios from 'axios'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'

const PostCreate = () => {
  const [title, setTitle] = useState('')

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    await axios.post('http://localhost:4000/posts', {
      title,
    })

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <Button variant="contained" type="submit">
          Create
        </Button>
      </form>
    </div>
  )
}

export default PostCreate
