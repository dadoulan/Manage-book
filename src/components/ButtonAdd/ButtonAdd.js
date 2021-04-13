import React from 'react';

const buttonAdd = (props) => {
  const myCss = `btn ${props.btnType} ${props.options}`;
  return (
    <button className={myCss} onClick={props.click}> {props.children}</button >
  )
};

export default buttonAdd;