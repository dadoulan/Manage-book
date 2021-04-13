import React from 'react';
import classes from "./Title.module.css";

const title = (props) => {
  const monCss = `${classes.policeTitle} border border-dark p-2 mt-2 text-white text-center bg-primary rounded w-50`;
  return (
    <div className="d-flex justify-content-center">
      <h1 className={monCss}>{props.children}</h1>
    </div>
  )
}

export default title
