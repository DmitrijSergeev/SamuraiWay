import React, {FC} from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "../Profile/ProfileInfo/ProfileInfo";
import {MyPosts} from "../Profile/MyPosts/MyPosts";

type ProfilePType = {}

export const Profile: FC<ProfilePType> = (props) => {
    const {} = props;
    return (
        <div className={s.Profile}>
            <ProfileInfo/>
            <MyPosts />
        </div>
    );
};

