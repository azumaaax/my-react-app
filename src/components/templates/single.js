import React from 'react';
import Navi from './navi';
import styles from './single.module.scss';


const Single = ({params}) => {

  // console.log(params.title);
  const { title, context } = params;

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <Navi />
      <div>
        {context}
      </div>
    </>
  );
};

export default Single;