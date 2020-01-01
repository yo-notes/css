import React from 'react';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  bread: {
    width: '160px',
    height: '60px',
    backgroundColor: '#fff8c6',
    border: '2px solid #ffc800',
    borderRadius: '10px'
  }
});

function JssBread() {
  const { bread } = useStyles();
  return <div className={bread}>BREAD🍞 by react-jss</div>;
}

export default JssBread;
