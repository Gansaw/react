import BoxRows from './BoxRows1';
import { useState, useEffect, useRef } from 'react';
import './Box.css';

const Box = () => {

    const [mvlist, setMvlist] = useState();


    useEffect(() => {
        // 어제 날짜 만들기 ko.javascript.info/date 참고
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        let year = yesterday.getFullYear();

        let month = yesterday.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;

        let date = yesterday.getDate();
        date = date < 10 ? `0${date}` : date;

        let seldt = `${year}${month}${date}`;


        getData(seldt);
        dt1.current.value = `${year}-${month}-${date}`;

    }, []);

    //날짜 입력창
    const dt1 = useRef();

    //날짜 선택
    const getDt = () => {
        let seldt = dt1.current.value.replaceAll('-', '');
        console.log(seldt);

        getData(seldt);
    };

    // 데이터 가져오기
    const getData = (seldt) => {
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${seldt}`;
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setMvlist(data.boxOfficeResult.dailyBoxOfficeList))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <main className="container">
                <article data-theme="dark">
                    <header>
                        <nav>
                            <ul>
                                <li><h1>일일 박스오피스</h1></li>
                            </ul>
                            <ul>
                                <li><input ref={dt1} type='date' id='dt1' name='dt1' onChange={() => getDt()}></input></li>
                            </ul>
                        </nav>
                    </header>
                    <table>
                        <thead>
                            <tr id='list'>
                                <th scope="col">순위</th>
                                <th scope="col">영화명</th>
                                <th scope="col">매출액</th>
                                <th scope="col">증감</th>
                            </tr>
                        </thead>
                        {mvlist && <BoxRows mv={mvlist} />}
                    </table>
                </article>
            </main>
        </>
    );
};

export default Box;
