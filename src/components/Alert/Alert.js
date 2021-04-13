import React from 'react';

const alert = (props) => {
  const css = `${props.options} alert`
  return (
    <div class={css} role="alert">
      {props.children}
    </div>
  )
};

export default alert;