import React, {FC} from 'react';
import s from './Message.module.css'

type MessagePType = {
    message: string
}

export const Message: FC<MessagePType> = (props) => {
    const {message} = props;
    return (
        <div className={s.message}>{message}
        </div>
    );
};