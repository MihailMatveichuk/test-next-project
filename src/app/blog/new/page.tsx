import NewPostForm from '@/app/components/NewPostForm'
import { redirect } from 'next/navigation';
import React from 'react'

export default function NewPost() {
  return (
    <>
      <h1>Create New Post</h1>
      <NewPostForm onSuccess={async (id) => {
        'use server'

        redirect(`/blog/${id}`);
      }}/>
    </>
    
  )
}
