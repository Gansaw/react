import React, { useState, useEffect, useRef } from "react";
import TableFcst from './TableFcst';

const Fcst = () => {
  const [items, setItems] = useState();

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
    console.log('items',items)
  }, [])
  
  return (
    <main className="container">
      {/* props 이용 */}
      {items && <TableFcst items = {items} />}      
    </main>
  );
};

export default Fcst;
