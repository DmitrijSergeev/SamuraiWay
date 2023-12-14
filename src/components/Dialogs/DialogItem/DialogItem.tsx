import React, {FC} from 'react';
import s from './DialogItem.module.css'

type DialogItemPType = {}

export const DialogItem: FC<DialogItemPType> = (props) => {
    const {} = props;
    return (
        <div className={`${s.dialog} ${s.active}`}>
        </div>
    );
};