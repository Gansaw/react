import React from 'react';
import styles from './Gallery.module.css';


const GalleryArticle = ({ item, index }) => {
  let tags = item.galSearchKeyword.split(',').map((tag, index) => (
    <span key={index} className={styles.tags}>
      {tag}
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