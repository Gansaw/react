import { useState, useEffect } from "react";
import FcstTable from './FcstTable' ;

const UltraFcst = () => {
    //useState변수 : 변수 값이 변경이 되면 재 랜더링 
    const [items, setItems] = useState();

    //랜더링이 될때 한번 실행
    useEffect(() => {
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
        url = url + 'serviceKey=sf3ip2B6hnhTGWtWVKPKJ1YPCP1HkocEZ7NaiBJiUbBoaYUhuPMMqRdoadGuR1w0PI783p7%2Btrb6Rkip5TXLqA%3D%3D';
        url = url + '&numOfRows=60';
        url = url + '&pageNo=1';
        url = url + '&base_date=20230529';
        url = url + '&base_time=0630';
        url = url + '&nx=55';
        url = url + '&ny=127';
        url = url + '&dataType=json';

        console.log(url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err))
    }, []);


    useEffect(() => {
        console.log('items', items) ;
    }, [items])


    return (
        <>
        { items && <FcstTable items={items} gubun='초단기예보' /> }
        </>
    );
}

export default UltraFcst;