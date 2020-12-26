import React from 'react';
import s from './HeaderBlock.module.scss';

import ReactLogo from '../../logo.png';
import {ReactComponent as ReactLogoSvg} from '../../logo.svg';


const HeaderBlock = ({tittle, hideBackground = false, dsc}) => {
    const styleCover = hideBackground ? {backgroundImage: 'none'} : {}; 
    return(
        <div className={s.cover} style={styleCover}>
            <div className={s.wrap}>
                {tittle && <h1 className={s.header}>{tittle}</h1> }
                <ReactLogoSvg />
                {dsc && < p className={s.dsc}>{dsc}</p>}
            </div>
        </div>
    );
};

export default HeaderBlock;