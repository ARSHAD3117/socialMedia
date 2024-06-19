import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData} from '../store/post-list-store'
import WelcomeMessage from './WelcomeMessage'
import LoaderSpinner from './LoaderSpinner'


const PostList = () => {

    const {postList,fetched} = useContext(PostListData)

  return (
    <div>
         {fetched && <LoaderSpinner/>}
        {!fetched && postList.length ===0 && <WelcomeMessage/>}
        { !fetched && postList.map((postListItem) =>(
            <Post
            key={postListItem.id}
            postListItem={postListItem}
            />
    ))}
    </div>
  )
}

export default PostList;