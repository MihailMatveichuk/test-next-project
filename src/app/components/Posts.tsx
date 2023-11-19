"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { IPost } from "../blog/page";
import useSWR from 'swr';
// import { usePosts } from "../../../store";
// import { shallow } from "zustand/shallow";
import { getAllPosts } from "../../../services/getPosts";

export default function Posts() {
const {data: posts, isLoading} = useSWR('posts', getAllPosts)

  // const [posts, loading, getAllPosts] = usePosts(
  //   (state) => [state.posts, state.loading, state.getAllPosts],
  //   shallow
  // );

  // useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul className='posts-list'>
      {posts.map((post: IPost) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
