import * as api from '../api'
import { CREATE_POST, DELETE_POST, FETCH_ALL, LIKE_POST, UPDATE_POST } from '../constants/actionType';

//Action Creator to get Posts
export const getPosts = ()=> async (dispatch)=>{
    try {
        const { data } = await api.fetchPosts();
        dispatch({type:FETCH_ALL,payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

//Action Creator to create Post
export const createPost = (post)=> async (dispatch)=>{
    try {
        const { data } = await api.createPost(post);
        dispatch({type:CREATE_POST,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post)=> async (dispatch)=>{
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({type:UPDATE_POST,payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id)=> async (dispatch)=>{
    try {
         await api.deletePost(id);
        dispatch({type:DELETE_POST,payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id)=> async (dispatch)=>{
    console.log(12121)
    try {
        const { data } = await api.likePost(id);
        dispatch({type:LIKE_POST,payload: data})
    } catch (error) {
        console.log(error)
    }
}