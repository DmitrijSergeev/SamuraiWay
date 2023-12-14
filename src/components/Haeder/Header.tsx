import React, {FC} from 'react';
import s from './Header.module.css'
import samurai from "../../img/samurai.png";

type HeaderPType = {}

export const Header: FC<HeaderPType> = (props) => {
    const {} = props;
    return (
        <header className={s.header}>
            <img src={samurai} className={s.ya} alt={'logo'}/>
            <h1>Give peace a chance</h1>
        </header>
    );
};

