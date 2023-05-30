import { useState, useEffect, useRef } from "react";
import code from "./getcode.json" ;

const FcstTable = ({items, gubun}) => {
    //useState변수 : 변수 값이 변경이 되면 재 랜더링 
    const [trTags, setTrTags] = useState();
    const [opTags, setOpTags] = useState();
    const sel = useRef() ;

    console.log('FcstTable gubun' , gubun)

    //랜더링이 될때 한번 실행
    useEffect(() => {
        //code 만들기
        let tempcd =  code.filter((i) => i["예보구분"] === gubun)
        tempcd = tempcd.map((i) =>
            <option key={i['항목값']} value={i['항목값']}>{i['항목명']}({i['항목값']})</option>
        );
        setOpTags(tempcd) ;

        console.log('tempcd', tempcd) ;
    }, [gubun]);


    useEffect(() => {

    }, [items])

    //사용자정의 : select change
    const showItem = (e) => {
        e.preventDefault() ;
        //console.log('sel' , e.target.value);
        console.log('sel' , sel.current.value);


        if (items === undefined) return ;
        let temp = items.filter((i) => i.category === sel.current.value);
        let tempcd =  code.filter((i) => 
                i["예보구분"] === gubun && 
                i["항목값"]  === sel.current.value
        );
        tempcd = tempcd[0] ;

        console.log('tempcd', tempcd) ;
        let skyobj = {'1':'☀️', '3': '☁️', '4':'🌥️'} ;
        let ptyobj = {'0':'없음', '1': '비', '2':'비/눈', '3':'눈', '5':'빗방울', '6':'빗방울눈날림', '7':'눈날림'} ;

        temp = temp.map((i, idx) =>
            <tr key={i.category + idx}>
               <td>{tempcd['항목명']}</td> 
               <td>{i.fcstDate}</td> 
               <td>{i.fcstTime}</td> 
               <td>
                { (i.category === 'SKY') ? skyobj[i.fcstValue] 
                  : (i.category === 'PTY')? ptyobj[i.fcstValue] 
                    :i.fcstValue + tempcd['단위']  }
               </td> 
            </tr>
        );
        console.log('items', items);
        console.log('temp', temp);
        setTrTags(temp) ;
    }

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                    <div className="grid">
                        <div><h1>기상청 {gubun}</h1></div>
                        <div>
                            <select ref={sel} id='sel' name='sel' onChange={showItem}>
                                <option val=''>선택</option>
                                {opTags}
                            </select>
                        </div>
                    </div>
                    </form>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">자료구분코드</th>
                            <th scope="col">예측일자</th>
                            <th scope="col">예측시간</th>
                            <th scope="col">예보 값</th> 
                        </tr>
                        {items && trTags}
                    </thead>
                </table>
            </article>
        </main>
    );
}

export default FcstTable;