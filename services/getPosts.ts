import axios from "axios";

const getAllPosts = async () => {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return responce.data;
}

const getPostsBySearch = async (search: string) => {
    const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
    return responce.data;
}

export {getAllPosts, getPostsBySearch}