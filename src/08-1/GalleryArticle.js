import React from 'react';
import styles from './Gallery.module.css';


const GalleryArticle = ({ item, onClickTags }) => {
  let tags = item.galSearchKeyword.split(',');
  tags = tags.map((i) => (
    <span className={styles.tags} onClick={onClickTags}>
      {i}
    </span>
  ));

  return (
    <article>
      <header>
        <span className={styles.title}>{item.galTitle}</span>
        <span className={styles.subtitle}>{item.galPhotographyLocation}</span>
      </header>
      <div>
        <img src={item.galWebImageUrl} alt='imageUrl' />
      </div>
      <footer>
        <div>{tags}</div>
      </footer>
    </article>
  );
}

export default GalleryArticle;
