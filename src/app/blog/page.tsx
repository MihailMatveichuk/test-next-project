import { Metadata } from "next";
import React, { useEffect, useState } from "react";
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

export default function Blog() {

  return (
    <div className='container'>
      <h1>Blog page</h1>
      <Search/>
      <Posts/>
    </div>
  );
}
