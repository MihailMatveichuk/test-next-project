import axios from 'axios'
import { Metadata } from 'next'
import React from 'react'
import { getAllPosts, getPostById } from '../../../../services/getPosts'
import { redirect } from 'next/navigation'

type Props = {
    params: {
      slug: string
    }
}

export async function generateStaticParams() {
  const posts: any[] = await getAllPosts()

  return posts.map(post => ({
    slug: post.id.toString(),
  }))
}

export async function generateMetadata({params: {slug}}: Props): Promise<Metadata>{
  const post = await getPostById(slug);
    return{
      title: post.title,
    }
}

async function deletePost(id: string){
  'use server'
      const responce = await fetch(`http://localhost:3300/posts/${id}`, {
          method: "DELETE",
      });

     await redirect('/blog')
}

export default async function Post({params: {slug}}: Props) {

  const post = await getPostById(slug);
  
  return (
    <div className='container post-paragraph'>
      <h1>{post.title}</h1> 
      <p>{post.body}</p>

      <form action={deletePost.bind(null, slug)}>
        <input type="submit" value='Delete Post'/>
      </form>
    </div>
  )
}
