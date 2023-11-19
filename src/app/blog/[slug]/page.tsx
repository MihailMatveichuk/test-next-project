import axios from 'axios'
import { Metadata } from 'next'
import React from 'react'

type Props = {
    params: {
      slug: string
    }
}

export async function generateMetadata({params: {slug}}: Props): Promise<Metadata>{
  const post = await getData(slug);
    return{
      title: post.title,
    }
}

async function getData(id: string) {
  const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return responce.data;
}

export default async function Post({params: {slug}}: Props) {

  const post = await getData(slug);
  return (
    <div className='container post-paragraph'>
      <h1>{post.title}</h1> 
      <p>{post.body}</p>
    </div>
  )
}
