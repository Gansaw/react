import data from './dataFrcst.json';
import './Frcst.css';
import { useState } from 'react';

const sortDt = ['frcstOneDt', 'frcstTwoDt', 'frcstThreeDt', 'frcstFourDt'];

const sortCn = ['frcstOneCn', 'frcstTwoCn', 'frcstThreeCn', 'frcstFourCn'];

let dtcn = {};
sortDt.map((item, idx) => (dtcn[data[item]] = data[sortCn[idx]]));
console.log(dtcn);

const Frcst = () => {
  const [bodyTag, setBodyTag] = useState('');
  const [selDt, setSelDt] = useState('');

  const detail = (k) => {
    let dtcnItem = dtcn[k].split(',');
    setSelDt(k);
    dtcnItem = dtcnItem.map((item) => item.split(':'));
    const detailTag = dtcnItem.map((item) => (
        <div key={item[0]}>
        <span className = 'sp1'>{item[0]}</span>
        <span >{item[1]}</span>
      </div>
    ));
    setBodyTag(detailTag);
  };    

  let dtTag = [];
  dtTag = Object.keys(dtcn).map((item, idx) => (
    <div className key={'dt' + idx} onClick={() => detail(item)}>
      {item}
    </div>
  ));


  return (
    <main className="container">
      <article data-theme="dark">
        <header>
          <h1>초미세먼지 주간예보</h1>
          <div className="grid">{dtTag}</div>
        </header>
        <div className="grid">{bodyTag}</div>
      </article>
    </main>
  );
};

export default Frcst;

