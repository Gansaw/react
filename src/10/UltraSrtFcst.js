import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TableFcst from './TableFcst';

const UltraSrtFcst = () => {
    console.log("useParames", useParams())
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    const [datas, setDatas] = useState() ;
    useEffect(()=>{
        const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=sf3ip2B6hnhTGWtWVKPKJ1YPCP1HkocEZ7NaiBJiUbBoaYUhuPMMqRdoadGuR1w0PI783p7%2Btrb6Rkip5TXLqA%3D%3D&numOfRows=60&pageNo=1&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}&dataType=json`
        
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setDatas(data.response.body.items))
        .catch((err) => console.log(err))
    }, []);

    return(
        <article>
            <header>{area}</header>
            {datas && <TableFcst datas={datas} gubun="초단기예보 "/>}
        </article>
    );
}

export default UltraSrtFcst ;