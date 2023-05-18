import React, { useState, useEffect, useRef } from 'react';
import styles from './Gallery.module.css';
import GalleryView from './GalleryView';
import GalleryArticle from './GalleryArticle';

const Gallery = () => {
    const txt1 = useRef();
    const [items, setItems] = useState();
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        txt1.current.focus();
        console.log('useEffect', items);
    }, [items]);

    useEffect(() => {
        if (!keyword) return;

        const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json`;

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err));

        console.log(url);
    }, [keyword]);

    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') {
            return;
        }
        const kw = encodeURI(txt1.current.value);
        setKeyword(kw);
        console.log(kw);
    };

    const reset = (e) => {
        e.preventDefault();
    };


      
    return (
        <main className="container">
            <form>
                <article>
                    <header>
                        <img src="https://i.namu.wiki/i/395c1BVea4SOKjpk6Qi4rtmCsUcyt7oyVyTH99dtt4Y4ghz0YpwT8qR3pz2OoHkNctKAKlVbFneufphXj08PJw.webp" alt='img01' />
                    </header>
                    <div className={styles.header}>한국관광공사_관광사진갤러리</div>
                    <div className="grid">
                        <div>
                            <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." required />
                        </div>
                        <div className={styles.btDiv}>
                            <button onClick={(e) => show(e)}>확인</button>
                            <button onClick={(e) => reset(e)}>취소</button>
                        </div>
                    </div>
                </article>
            </form>
            {items && (
                <GalleryView content={items}>
                    {items.map((item) => (
                        <GalleryArticle key={item.galTitle} item={item} />
                    ))}


                </GalleryView>
            )}
        </main>
    );
};

export default Gallery;