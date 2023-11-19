import axios from 'axios';
import {create} from 'zustand';
import { getAllPosts, getPostsBySearch } from '../services/getPosts';


type UsePosts = {
    posts: Array<any>,
    loading: boolean,
    getAllPosts: () => Promise<void>,
    getPostsBySearch: (value: string) => Promise<void>,
}

export const usePosts = create<UsePosts>()((set) => ({
    posts: [],
    loading: false,
    getAllPosts: async () => {
        set({loading: true})
        const posts = await getAllPosts()
        set({loading: false, posts})
    },
    getPostsBySearch: async (value: string) => {
        set({loading: true})
        const posts = await getPostsBySearch(value)
        set({loading: false, posts})
    },
}))