import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TableFcst from './TableFcst';

const UltraSrtFcst = () => {
  const { dt, x, y } = useParams();

  const [forecastData, setForecastData] = useState([]);

  const getData = (no, num, bDate, btime) => {
    let apikey = 'sf3ip2B6hnhTGWtWVKPKJ1YPCP1HkocEZ7NaiBJiUbBoaYUhuPMMqRdoadGuR1w0PI783p7%2Btrb6Rkip5TXLqA%3D%3D';
    let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
    url = url + `serviceKey=${apikey}`;
    url = url + `&pageNo=${no}`;
    url = url + `&numOfRows=${num}`;
    url = url + `&dataType=JSON`;
    url = url + `&base_date=${bDate.replace(/-/g, '')}`;
    url = url + `&base_time=${btime}`;
    url = url + `&nx=${x}`;
    url = url + `&ny=${y}`;

    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(data => {            
        console.log(data);
        // 데이터 처리 로직 작성
        setForecastData(prevData => [...prevData, data]); // 예보 데이터를 저장하는 예시
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
 
    if (dt) {
      // 최근 3일간의 날짜 계산
      const today = new Date();
      const bDate = dt.replace(/-/g, '');
      const oneDayAgo = new Date(today.getTime() - (1 * 24 * 60 * 60 * 1000));
      const twoDaysAgo = new Date(today.getTime() - (2 * 24 * 60 * 60 * 1000));
      const bDate1 = oneDayAgo.toISOString().slice(0, 10).replace(/-/g, '');
      const bDate2 = twoDaysAgo.toISOString().slice(0, 10).replace(/-/g, '');

      // 예보 데이터를 가져오는 작업 수행
      const fetchData = async () => {
        for (let i = 0; i < 24; i++) {
          const btime = `${String(i).padStart(2, '0')}00`;
          getData(1, 60, bDate, btime);
          getData(1, 60, bDate1, btime);
          getData(1, 60, bDate2, btime);
        }
      };

      fetchData();
    }
  }, [dt, x, y]);

  return (
    <div>
      <TableFcst forecastData={forecastData} />
    </div>
  );
};

export default UltraSrtFcst;