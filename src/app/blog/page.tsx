import { Metadata } from 'next';
import React from 'react'
import axios from 'axios';
import Link from 'next/link';

export interface IPost{
    userId: number,
    id: number,
    title: string 
    body: string
}


async function getData() {
  const responce = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return responce.data;
}

export const metadata: Metadata = {
  title: "Next App | Blog",
};

export default async function Blog() {
  const posts = await getData();
    return (
    <div className='container'>
      <h1>Blog page</h1>
      <ul className='posts-list'>
        {posts.map((post:IPost ) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
