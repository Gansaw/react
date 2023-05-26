import { useState, useEffect, useRef } from "react";
import code from './getcode.json';
import xy from './getxy.json';


const FcstTb = ({ items, gubun }) => {
  const [trTags, setTrTags] = useState();
  const [opTags, setOpTags] = useState();
  const sel = useRef();

  const [dt, setDt] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');

  const sel1 = useRef();

  useEffect(() => {
    console.log(dt);
  }, [dt]);

  const getDt = () => {
    let tdt = new Date();
    setDt(tdt);
  };

  const getSel = () => {
    let temp = xy.filter((item) => item["행정구역코드"] === parseInt(sel1.current.value))[0];
    console.log(temp);
    setX(temp["격자 X"]);
    setY(temp["격자 Y"]);
  };

  useEffect(() => {
    let tempcd = code.filter((i) => i["예보구분"] === gubun);
    tempcd = tempcd.map((i) => (
      <option key={i['항목값']} value={i['항목값']}>
        {i['항목명']}({i['항목값']})
      </option>
    ));
    setOpTags(tempcd);
    console.log('tempcd', tempcd);
  }, [gubun]);

  useEffect(() => {}, [items]);

  const showItem = (e) => {
    e.preventDefault();
    console.log('sel', sel.current.value);

    if (items === undefined) return;
    let temp = items.filter((i) => i.category === sel.current.value);
    let tempcd = code.filter(
      (i) => i["예보구분"] === gubun && i["항목값"] === sel.current.value
    );
    tempcd = tempcd[0];

    let skyobj = { '1': '🌞', '3': '☁', '4': '⛅' };
    let ptyobj = {
      '0': '없음',
      '1': '비',
      '2': '비/눈',
      '3': '눈',
      '5': '빗방울',
      '6': '빗방울눈날림',
      '7': '눈날림',
    };

    temp = temp.map((i, idx) => (
      <tr key={i.category + idx}>
        <td>{tempcd['항목명']}</td>
        <td>{i.fcstDate}</td>
        <td>{i.fcstTime}</td>
        <td>
          {i.category === 'SKY'
            ? skyobj[i.fcstValue]
            : i.category === 'PTY'
            ? ptyobj[i.fcstValue]
            : i.fcstValue + tempcd['단위']}
        </td>
      </tr>
    ));
    setTrTags(temp);
    console.log('temp', temp);
    console.log('items', items);
  };

  return (
    <main className="container">
      <form>
        <article>
          <header>
            <div className="grid">
              <div>
                <h1>기상청 {gubun}</h1>
              </div>
              <div>
                <select ref={sel} id="sel" name="sel" onChange={showItem}>
                  <option val="">선택</option>
                  {opTags}
                </select>
              </div>
            </div>
          </header>
          <table>
            <thead>
              <tr>
                <th scope="col">자료구분코드</th>
                <th scope="col">예측일자</th>
                <th scope="col">예측시간</th>
                <th scope="col">예보 값</th>
              </tr>
              {items && trTags}
            </thead>
          </table>
        </article>
      </form>
    </main>
  );
};

export default FcstTb;
