import { useEffect } from "react";
import TableFcst from './TableFcst';

const VilageFcst = () => {
      
      const getData = (no, num, bdate, btime, nx, ny) => {
    
        let apikey = 'sf3ip2B6hnhTGWtWVKPKJ1YPCP1HkocEZ7NaiBJiUbBoaYUhuPMMqRdoadGuR1w0PI783p7%2Btrb6Rkip5TXLqA%3D%3D';
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
        url = url + `serviceKey=${apikey}`;
        url = url + `&pageNo=${no}`;
        url = url + `&numOfRows=${num}`;
        url = url + `&dataType=JSON`;
        url = url + `&base_date=${bdate}`;
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
        getData(1, 10, '20210521', '1200', '60', '127');
      }, []);

    return (
      <TableFcst />
    );
}

export default VilageFcst;