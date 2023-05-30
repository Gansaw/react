import {Link} from 'react-router-dom' ;
import {useState, useEffect, useRef} from 'react' ;
import xy from './getxy.json' ;

const FcstMain = () => {
    const ops = xy.map((item) =>
        <option value={item["행정구역코드"]} key={item["행정구역코드"]} >
            {item["1단계"]}
        </option>
    ) ;
    console.log(xy)

    //state 변수
    const [dt, setDt] = useState() ;
    //const [code, setCode] = useState() ;
    const [area, setArea] = useState() ;
    const [x, setX] = useState() ;
    const [y, setY] = useState() ;

    //입력 값을 가져오기 위한 ref변수
    const txt1 = useRef();
    const sel1 = useRef();


    //dt가 변경되었을때 
    useEffect(()=>{        
        console.log(dt);
    }, [dt]) ;

    // useEffect(()=>{        
    //     console.log("code", code);
    //     let temp = xy.filter((item) => item["행정구역코드"] ===code)[0] ;
    //     console.log(temp);
    //     setArea(temp["1단계"]);
    //     setX(temp["격자 X"]);
    //     setY(temp["격자 Y"]);
    // }, [code]) ;

    //입력 이벤트
    const getDt = () => {
        let tdt = txt1.current.value ;
        tdt = tdt.replaceAll('-', '') ;
        
        setDt(tdt);
    }

    const getSel = () => {
        let temp = xy.filter((item) => item["행정구역코드"] ===parseInt(sel1.current.value))[0] ;
        console.log(temp);
        setArea(temp["1단계"]);
        setX(temp["격자 X"]);
        setY(temp["격자 Y"]);
    }
 
    return(
        <article>
            <header><h1>단기예보 정보 선택</h1></header>
            <div className='grid'>
                <div>
                <input ref={txt1} type='date' id='dt' name='dt' onChange={() => getDt()}/>
                </div>
                <div>
                <select ref={sel1} id='sel' name='sel' onChange={() => getSel()}>
                    <option value=''>선택</option>
                    {ops}
                </select>
                </div>
            </div>
            <footer>
                <div className="grid">
                    <Link to={`/ultra/${dt}/${area}/${x}/${y}`} role='button'>초단기예보</Link>
                    <Link to={`/vilage/${dt}/${area}/${x}/${y}`} role='button'>단기예보</Link>
                </div>
            </footer>
        </article>
    );
}

export default FcstMain ;