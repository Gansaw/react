import data from './dataFrcst.json' ;
import { useState } from 'react';
import './Frcst.css';

const Frcst = () => {
    console.log(data)
    /* 공공데이터포털 : 한국환경공단_에어코리아_대기오염정보
    frcstOneCn : 첫째날예보
    frcstTwoCn : 둘째날예보
    frcstThreeCn : 셋째날예보
    frcstFourCn : 넷째날예보
    frcstOneDt : 첫째날예보일시
    frcstTwoDt : 둘째날예보일시
    frcstThreeDt : 셋째날예보일시
    frcstFourDt : 넷째날예보일시
    */
    const [selData, setSelData] = useState('');
    const [selDt, setSelDt] = useState('');

    const frcstDtKey = ['frcstOneDt', 'frcstTwoDt', 'frcstThreeDt','frcstFourDt'] ;
    const frcstCnKey = ['frcstOneCn', 'frcstTwoCn', 'frcstThreeCn', 'frcstFourCn'] ;
    let frcst = {} ;
    for (let [idx, dtk] of frcstDtKey.entries()) {
        console.log(idx, dtk)
        frcst[data[dtk]] = data[frcstCnKey[idx]] ;
    }
   
    console.log(frcst)

    const show = (item) => {
        setSelDt(item) ;
        let showTag = frcst[item].split(',') ;
        showTag = showTag.map((d) => d.split(':'))
        console.log(showTag)
        showTag = showTag.map((d) => <div key={d[0]}>
                                        <span className='sp1'>{d[0]}</span>
                                        <span className= {d[1].trim() === '낮음' ? 'sp11' : d[1].trim() === '보통' ? 'sp12' : 'sp13'}>{d[1]}</span>
                                    </div>)
        setSelData(showTag) ;
    }

    //오브젝트 키값 가져오기
    let frcstDts = Object.keys(frcst).map((item) => <div className={selDt === item ? 'divmSel' : 'divm' }
                                                    key={item} 
                                                    onClick={() => show(item)}>{item}
                                                    </div>) ;

    return (
        <main className='container'>
            <article>
                <header><h1>초미세먼지 주간예보</h1></header>
                <div className='grid'>
                     {frcstDts}
                </div>
                <footer>
                    <div  className='grid'>
                    {selData}
                    </div>
                </footer>
            </article>
        </main>
    );
}

export default Frcst ;