import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TableFcst from './TableFcst';

const UltraSrtFcst = () => {
  const dt = useParams().dt;
  const x = useParams().x;
  const y = useParams().y;

  const [data, setData] = useState();

useEffect(() => {

  let url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?";
  url = url + "serviceKey=sf3ip2B6hnhTGWtWVKPKJ1YPCP1HkocEZ7NaiBJiUbBoaYUhuPMMqRdoadGuR1w0PI783p7%2Btrb6Rkip5TXLqA%3D%3D";
  url = url + "&numOfRows=60";
  url = url + "&pageNo=1";
  url = url + `&base_date=${dt}`;
  url = url + "&base_time=0630";
  url = url + `&nx=${x}`;
  url = url + `&ny=${y}`;
  url = url + "&dataType = JSON";

  fetch(url)
  .then((resp) => resp.json())
  .then((data) => setData(data.response.body.items.item))
  .catch((err) => console.log(err))
}, [])

  return (
    <div>
      {data && <TableFcst data={data} gubun="초단기예보" />}
    </div>
  );
};  

export default UltraSrtFcst;
