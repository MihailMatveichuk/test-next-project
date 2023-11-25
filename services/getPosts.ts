import axios from "axios";

const getAllPosts = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60,
        }
    });

    if(!responce.ok) throw new Error("unable to fetch posts")
    return responce.json();
}

const getPostsBySearch = async (search: string) => {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);
    if(!responce.ok) throw new Error("unable to fetch posts")
    return responce.json();
}

export {getAllPosts, getPostsBySearch}
