import React from 'react';
import styles from './navi.module.scss';

const Navi = () => {

  // anchor link
  const onClickLink = e =>
    location.href = e.currentTarget.dataset.link;


  return (
    <ul className={styles.navi}>
      <li><span data-link="/top" onClick={onClickLink}>top</span></li>
      <li><span data-link="/confirm" onClick={onClickLink}>confirm</span></li>
      <li><span data-link="/" onClick={onClickLink}>logout</span></li>
    </ul>
  );

};

export default Navi;