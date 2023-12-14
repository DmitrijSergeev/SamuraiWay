import React, {FC} from 'react';
import s from './Post.module.css'
import samurai from "../../../../img/samurai.png";

type PostPType = {}

export const Post: FC<PostPType> = (props) => {
    const {} = props;
    return (
        <div>
            <div className={s.item}>
                <img src={samurai} className={s.ava} alt={'ava'}/>
                <div>Hello</div>
                <div>
                    <span>like</span> 14
                </div>
            </div>
        </div>
    );
};