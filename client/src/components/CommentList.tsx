import React from 'react'

export type Comment = {
  id: string
  content: string
  status: 'pending' | 'rejected' | 'approved'
}

const CommentList = ({ comments }: { comments: Comment[] }) => {
  const renderedComments = comments.map(({ id, content, status }) => {
    let commentContent

    if (status === 'rejected') {
      commentContent = 'Comment was rejected'
    }
    if (status === 'pending') {
      commentContent = 'Comment waiting for moderation'
    }
    if (status === 'approved') {
      commentContent = content
    }

    return <li key={id}>{commentContent}</li>
  })

  return <ul>{renderedComments}</ul>
}

export default CommentList
