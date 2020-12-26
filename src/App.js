import React from 'react';
import HeaderBlock from './components/HeaderBlock';
import ContentBlock from './components/ContentBlock';
import FooterBlock from './components/FooterBlock'

const App = () => {
  return (     
    <>
      <HeaderBlock 
        tittle = "Учите слова онлайн"
        dsc =  "Воспользуйтесь карточками для запоминания и изучения новых иностранных слов"
      />
      <HeaderBlock 
        tittle = "Нам нравится это!"
        hideBackground
      />
      <ContentBlock
        tittle = "Добрый день Пользователь!"
        firstText = "В данном разделе Вы можете посмотреть как работают пропсы"
        secondText = "Даннаый блок позволяет мне разобраться и опробовать работу пропсов что бы не было проблем в дальнейшем"
        bgColor = '#177c6d'
      />
      <FooterBlock
      waterMark = "(c) 2020-2021"
      copirate = "created from lesson 1 in ReactMarathone from Zavodov Sergey"
      
      />
    </>
  );
}

export default App;
