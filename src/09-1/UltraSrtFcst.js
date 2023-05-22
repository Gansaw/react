import React, { useEffect } from 'react';
import TableFcst from './TableFcst';

const UltraSrtFcst = ({dt, nx, ny }) => {

  const getData = (no, num, btime) => {


  
    let apikey = 'sf3ip2B6hnhTGWtWVKPKJ1YPCP1HkocEZ7NaiBJiUbBoaYUhuPMMqRdoadGuR1w0PI783p7%2Btrb6Rkip5TXLqA%3D%3D';
    let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
    url = url + `serviceKey=${apikey}`;
    url = url + `&pageNo=${no}`;
    url = url + `&numOfRows=${num}`;
    url = url + `&dataType=JSON`;
    url = url + `&base_date=${dt}`;
    url = url + `&base_time=${btime}`;
    url = url + `&nx=${nx}`;
    url = url + `&ny=${ny}`;

    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(data => {            
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    const btimeList = [];
    for (let i = 0; i <= 24; i++) {
      const btime = i.toString().padStart(2, '0') + '00';
      btimeList.push(btime);
    }
    btimeList.forEach((btime, index) => {
      setTimeout(() => {
        getData(1, 30, btime);
      });
    });
  }, []);

  return (
    <TableFcst />
  );
};

export default UltraSrtFcst;
