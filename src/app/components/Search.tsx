"use client";

import React, { FormEventHandler, useState } from "react";
// import { usePosts } from "../../../store";
import useSWR from "swr";
import { getPostsBySearch } from "../../../services/getPosts";

export default function Search() {
  const [search, setSearch] = useState("");
  const { mutate } = useSWR("posts");
  // const [getPostsBySearch] = usePosts(state => [state.getPostsBySearch])

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = async (
    event
  ) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type='search'
        placeholder='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}
