import React, {FC} from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "../Profile/ProfileInfo/ProfileInfo";
import {MyPosts} from "../Profile/MyPosts/MyPosts";
import {v1} from "uuid";

type ProfilePType = {}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export const Profile: FC<ProfilePType> = (props) => {
    const {} = props;

    const posts = [
        {
            id: v1(),
            message: 'Hello!',
            likesCount: 14
        },
        {
            id: v1(),
            message: 'Hi!',
            likesCount: 7
        },
        {
            id: v1(),
            message: 'Nice to see you!',
            likesCount: 11
        },
    ]

    return (
        <div className={s.Profile}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};

