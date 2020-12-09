
import React from 'react';
import styles from './button.module.scss';


const Button = ({params}) => {

  const onClick = params.onClick || null;
  const text = params.text || '';
  const style = `${params.style ? params.style : ''} ${styles.btn} btn btn-primary`;
  const disabled = `${params.disabled ? 'disabled' : ''}`;

  return (
    <button
      onClick={onClick}
      className={style}
      disabled={disabled}
    >
      {text}

    </button>
  );
};


export default Button;
