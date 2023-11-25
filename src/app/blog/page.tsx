import { Metadata } from "next";
import React from "react";
import Posts from "../components/Posts";
import Search from "../components/Search";
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const metadata: Metadata = {
  title: "Next App | Blog",
};

export const revalidate = 10;

export default function Blog() {

  return (
    <div className='container'>
      <h1>Blog page</h1>
      <Search/>
      <Posts/>
    </div>
  );
}
