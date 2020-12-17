import React from 'react';
import ReactDom from 'react-dom';

import HeaderBlock from './components/HeaderBlock';

import'./index.css';

const AppList = () =>{
  const item = ['item 1', 'item2','item3', 'item4']
  const firstItem = <li>Item 0 </li>

    const isAuth = true;


    return (
      <ul>
        { isAuth ? firstItem : null}
        {item.map(item => <li>{item}</li>)}
        <li>{item[0]} </li>
        <li>{item[1]}</li>
      </ul>
    );
}

const AppInput = () => {
  const placeholder = 'Type text...';

  return (
    <label>
      <input placeholder={placeholder}/>
    </label>
  )
}

const AppHeader = () =>  {

  return (
    <h1 className="header">Hello World React.js</h1>
  );
};

const App = () =>{
    return(
    <>
        <AppHeader/>
        <AppInput/>
        <AppList/>
        <AppHeader/>
        <AppList/>
    </>
    )
}


ReactDom.render(<App/>, document.getElementById('root'));