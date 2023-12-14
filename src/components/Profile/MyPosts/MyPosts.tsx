import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "../MyPosts/Post/Post";
import {PostsType} from "../Profile";

type MyPostsPType = {
    posts: PostsType[]
}

export const MyPosts: FC<MyPostsPType> = (props) => {
    const {posts} = props;
    return (
        <div className={s.MyPosts}>
            <Post posts={posts}/>
        </div>
    );
};