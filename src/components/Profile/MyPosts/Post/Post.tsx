import React, {FC} from 'react';
import s from './Post.module.css'
import samurai from "../../../../img/samurai.png";
import {PostsType} from "../../../Profile/Profile";

type PostPType = {
    posts: PostsType[]
}

export const Post: FC<PostPType> = (props) => {
    const {posts} = props;
    return (
        <div>
            <div className={s.item}>
                <img src={samurai} className={s.ava} alt={'ava'}/>
                <div>{posts.map( (el)=>{
                    return (
                        <div>
                            <div>{el.message}</div>
                            <div>{el.likesCount}</div>
                        </div>
                    )
                } )}</div>
            </div>
        </div>
    );
};