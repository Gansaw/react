/*
한국관광공사_관광사진갤러리 키워드 검색 목록 조회
https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
*/
import { useState, useEffect, useRef } from 'react';
import styles from './Homework.module.css' ;

const Homework = () => {
    //키워드 input
    const txt1 = useRef() ;

    //컴포넌트가 맨처음 랜더링되면
    useEffect(() => {
        txt1.current.focus();
    }, []);

    //확인버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return ; 
        
        let kw = encodeURI(txt1.current.value) ; 
        console.log(txt1.current.value, kw) ;
    }
    //취소버튼
    const showClear = (e) => {
        e.preventDefault();
    }

    return(
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
                            <button onClick={(e)=>show(e)}>확인</button> 
                            <button onClick={(e)=>showClear(e)}>취소</button>
                        </div>
                    </div>
                
            </article>
            </form>
        </main>
    );
}

export default Homework ;