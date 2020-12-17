import React from 'react';
import s from './HeaderBlock.module.css';
console.log('####: s', s);
const HeaderBlock = () => {
    return(
        <div>
            <div>
                <h1 className={s.header}>Учите слова онлайн</h1>
                <p>Воспользуйтесь карточками для запоминания и изучения новых иностранных слов</p>
            </div>
        </div>
    );
};

export default HeaderBlock;