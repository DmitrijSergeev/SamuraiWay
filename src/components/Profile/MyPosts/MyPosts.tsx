import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "../MyPosts/Post/Post";

type MyPostsPType = {}

export const MyPosts: FC<MyPostsPType> = (props) => {
    const {} = props;
    return (
        <div className={s.MyPosts}>
            <Post/>
        </div>
    );
};