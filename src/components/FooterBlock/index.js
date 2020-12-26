import style from './FooterBlock.module.scss'

const FooterBlock = ({waterMark, copirate}) =>{
    return(
            <div className={style.cover}>
                <p className={style.watermark}>{waterMark}</p>
                <p className = {style.copirate}>{copirate}</p>
            </div>
    );
};

export default FooterBlock;