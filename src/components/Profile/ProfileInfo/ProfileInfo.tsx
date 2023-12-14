import React, {FC} from 'react';
import s from './ProfileInfo.module.css'
import sea from "../../../img/beach-sea-coast.jpg";
import ya from "../../../img/dima.jpg";


type ProfileInfoPType = {}

export const ProfileInfo: FC<ProfileInfoPType> = (props) => {
    const {} = props;
    return (
        <div>
            <div>
                <img src={sea} className={s.sea} alt={'background'}/>
            </div>
            <div className={s.description}>
                <img className={s.avatar} src={ya} alt={'avatar'}/>
                That's me
            </div>
        </div>
    );
};