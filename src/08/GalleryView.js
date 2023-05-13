import React from 'react';
import style from './Homework.module.css';

const GalleryView = ({ gv }) => {

  const gvTags = [];
  let len = gv.length;

  if (len === 0) {
    return <div><h2>검색결과가 없습니다.</h2></div>
  }

  for (let i = 0; i < len; i += 2) {
    gvTags.push(
      <div className={style.gvRow} key={`row-${i / 2}`}>
        <article className={style.gvCol}>
          <div className={style.gvResult} key={gv[i].galContentId}>
            <div className={style.gvHeader}>
              <div className={style.gvTitle}>{gv[i].galTitle}</div>
              <div className={style.gvLocation}>{gv[i].galPhotographyLocation}</div>
            </div>
            <div className={style.gvBody}><img src={gv[i].galWebImageUrl} alt='imgURL'></img></div>
            <div className={style.gvFooter}>
              {gv[i].galSearchKeyword.split(',').map((keyword, index) => (
                <span key={index}>{keyword}</span>
              ))}
            </div>
          </div>
        </article>
        {gv[i + 1] && (
          <article className={style.gvCol}>
            <div className={style.gvResult} key={gv[i + 1].galContentId}>
              <div className={style.gvHeader}>
                <div className={style.gvTitle}>{gv[i + 1].galTitle}</div>
                <div className={style.gvLocation}>{gv[i + 1].galPhotographyLocation}</div>
              </div>
              <div className={style.gvBody}><img src={gv[i + 1].galWebImageUrl} alt='imgURL'></img></div>
              <div className={style.gvFooter}>
                {gv[i].galSearchKeyword.split(',').map((keyword, index) => (
                  <span key={index}>{keyword}</span>
                ))}
              </div>
            </div>
          </article>
        )}
      </div>

    );
  }

  return (
    <div>
      {gvTags}
    </div>
  );
};

export default GalleryView;
