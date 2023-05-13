import React from 'react';
import style from './Homework.module.css';

const GalleryView = ({ gv }) => {

  const gvTags = [];
  for (let i = 0; i < gv.length; i += 2) {
    gvTags.push(
      <div className={style.row} key={`row-${i / 2}`}>
        <div className={style.col}>
          <div className={style.gvResult} key={gv[i].galContentId}>
            <div>
              <div>{gv[i].galTitle}</div>
              <div>{gv[i].galPhotographyLocation}</div>
            </div>
            <div><img src={gv[i].galWebImageUrl} alt='imgURL'></img></div>
            <div>{gv[i].galSearchKeyword}</div>
          </div>
        </div>
        {gv[i + 1] && (
          <div className={style.col}>
            <div className={style.gvResult} key={gv[i + 1].galContentId}>
              <div>
                <div>{gv[i + 1].galTitle}</div>
                <div>{gv[i + 1].galPhotographyLocation}</div>
              </div>
              <div><img src={gv[i + 1].galWebImageUrl} alt='imgURL'></img></div>
              <div>{gv[i + 1].galSearchKeyword}</div>
            </div>
          </div>
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
