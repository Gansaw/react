import React, { useState, useEffect, useRef } from "react";
import code from './getcode.json';

const TableFcst = () => {
  const [items, setItems] = useState();
  const [trTags, setTrTags] = useState();
  const [opTags, setOpTags] = useState(); 
  const [selectedCategory, setSelectedCategory] = useState(''); 

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

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setItems(data.response.body.items.item))
      .catch((err) => console.log(err));

      console.log(url);
  }, []);

  useEffect(() => {
    if (items === undefined) return;    

    let temp = items.map((i, idx) => (
      <tr key={i.category + idx}>
        <td>{i.category}</td>
        <td>{i.fcstDate}</td>
        <td>{i.fcstTime}</td>
        <td>
          {i.fcstValue}
        </td>
      </tr>
    ));
    setTrTags(temp);    
  }, [items]);

  useEffect(() => {
    if (code === undefined) return;

    let tempcd = code.map((i) => (
      <option key={i["항목값"]} value={i["항목값"]}>
        {i["항목명"]}
      </option>
    ));
    setOpTags(tempcd);
  }, []);

  const showItem = (e) => {
    const selectedValue = e.target.value;
    const selectedItem = code.find((c) => c.항목값 === selectedValue);
    if (selectedItem) {
      setSelectedCategory(selectedItem.category);
    }
  };

  return (
    <main className="container">
      <article>
      <div>
        <h2>선택된 항목: {selectedCategory}</h2>
      </div>
        <form>
          <header>
            <div className="grid">
              <div>
                <h1>기상청 초단기예보</h1>
              </div>
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
                <th scope="col">항목명</th>
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

export default TableFcst;
