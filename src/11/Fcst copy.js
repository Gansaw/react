import React, { useState, useEffect, useRef } from "react";
import code from './getcode.json';

const Fcst = () => {
  const [items, setItems] = useState();
  const [trTags, setTrTags] = useState();
  const [opTags, setOpTags] = useState();
  const sel = useRef();

  useEffect(() => {
    let url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?";
    url = url + "serviceKey=sf3ip2B6hnhTGWtWVKPKJ1YPCP1HkocEZ7NaiBJiUbBoaYUhuPMMqRdoadGuR1w0PI783p7%2Btrb6Rkip5TXLqA%3D%3D";
    url = url + "&numOfRows=60";
    url = url + "&pageNo=1";
    url = url + "&base_date=20230524";
    url = url + "&base_time=0630";
    url = url + "&nx=55";
    url = url + "&ny=127";
    url = url + "&dataType=JSON";

    console.log(url);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setItems(data.response.body.items.item))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (items === undefined) return;

    let temp = items.filter((i) => i.category === sel.current.value)

    temp = temp.map((i, idx) => (
      <tr key={i.category + idx}>
        <td>{i.category}</td>
        <td>{i.fcstdate}</td>
        <td>{i.fcstTime}</td>
        <td>
          {i.fcstValue}
        </td>
      </tr>
    ));

    setTrTags(temp);
    console.log('temp', temp);
    console.log('items', items);
  }, [items]);

  const showItem = () => {
    console.log('sel', sel.current.value);
  }

  useEffect(() => {
    let tempcd = code.filter((i) => i["예보구분"] === "초단기예보" && i["항목값"] === sel.current.value)
    tempcd = tempcd.map((i) => (
      <option key={i['항목값']}>{i['항목명']}({i['항목값']})</option>
    ));
    setOpTags(tempcd);
  }, [sel.current.value]);

  return (
    <main className="container">
      <article>
        <form>
          <header>
            <div className="grid">
              <div><h1>기상청 초단기예보</h1></div>
              <div>
                <select id="sel" name="sel" onChange={showItem}>
                  <option value=''>선택</option>
                  {opTags}
                </select>
              </div>
            </div>
          </header>
          <table>
            <thead>
              <tr>
                <th scope="col">예측일자</th>
                <th scope="col">예측시간</th>
                <th scope="col">예측일자</th>
                <th scope="col">예측값</th>
              </tr>
              {items && trTags}
            </thead>
          </table>
        </form>
      </article>
    </main>
  );
};

export default Fcst;
