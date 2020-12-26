import React from 'react';

import style from './ContentBlock.module.scss'

const ContentBlock = ({tittle, firstText, secondText, bgColor}) => {
    const coverColor =  bgColor ? {backgroundColor: bgColor} : {backgroudColor: "#0B4D78"}; 

    return(
        <div className = {style.contentBlockCover} style = {coverColor}>
            <h1 className = {style.contentTittle}>{tittle}</h1>
            {firstText && <p className = {style.firstText}>{firstText}</p>}
            {secondText && <p className = {style.secondText}>{secondText}</p>}
        </div>
    );
};

export default ContentBlock;