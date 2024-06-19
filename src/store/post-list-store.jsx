import { createContext, useCallback, useEffect, useReducer, useState } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    fetched: false,
    deletePost: () => { },
})


const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
    }
    else if(action.type === "ADD_POST") {
        newPostList = [action.payload,...currPostList]
    } 
    else if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts
        }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [fetched,setFetched] = useState(false)

    const [postList, dispatchPostList] = useReducer(
        postListReducer, []
    )

    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts
            }
        })
    }

    const addPost = (post) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: post
        })
    }

    const deletePost = useCallback((postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId
            }
        })
    },[dispatchPostList])


    useEffect(() =>{
        const controller = new AbortController()
        const signal = controller.signal
        setFetched(true)
        fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
        .then(data => {
            addInitialPosts(data.posts)
            setFetched(false)
        })
        return ()=>{
            controller.abort()
        }
    },[])

    return (
        <PostList.Provider value={{
            postList,
            addPost,
            fetched,
            deletePost,
        }}>
            {children}
        </PostList.Provider>
    )
}

export default PostListProvider;