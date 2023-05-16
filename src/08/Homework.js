import { useState, useEffect, useRef } from 'react';
import GalleryView from './GalleryView';
import styles from './Homework.module.css';

const Homework = () => {
    // 키워드 input
    const txt1 = useRef();

    // 컴포넌트가 맨 처음 랜더링되면
    useEffect(() => {
        txt1.current.focus();
    }, []);

    // 확인 버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;

        const kw = encodeURI(txt1.current.value);
        setKeyword(kw);
    };

    // 취소 버튼
    const showClear = (e) => {
        e.preventDefault();
        txt1.current.value = "";
        txt1.current.focus();
        setData(null);
    };

    // Gallery에 있는 data를 const(useState)
    // 입력하는 값을 keyword로 지정하고 const(useState)
    const [data, setData] = useState();
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if (!keyword) return;

        const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data.response.body.items.item))
            .catch((err) => console.log(err));
        console.log(url);
    }, [keyword]);



    return (
        <main className="container">
            <form>
                <article>
                    <header>
                        <h1>한국관광공사_관광사진 정보</h1>
                    </header>
                    <div className="grid">
                        <div>
                            <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." required />
                        </div>
                        <div className={styles.btDiv}>
                            <button onClick={(e) => show(e)}>확인</button>
                            <button onClick={(e) => showClear(e)}>취소</button>
                        </div>
                    </div>
                </article>
            </form>            
                {data && <GalleryView gv={data} />}
        </main>
    );
};

export default Homework;
