import React, {FC} from 'react';
import {DialogItem} from "../Dialogs/DialogItem/DialogItem";
import {Message} from "../Dialogs/Message/Message";

type DialogsPType = {

}

export const Dialogs: FC<DialogsPType> = (props) => {
    const {} = props;
    return (
        <div>
            <DialogItem/>
            <Message message={'Hello'}/>
        </div>
    );
};
