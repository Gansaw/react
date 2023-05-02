import TaccidentData from './dataTaccident.json';
import TaccidentNav1 from './TaccidentNav1';
import TaccidentNav2 from './TaccidentNav2';
import { useState, useEffect } from 'react';
// import TaccidentNav3 from './TaccidentNav3';
const data = TaccidentData.data;
let c1 = data.map((item) => (item.사고유형_대분류));
let c2 = data.map((item) => ([item.사고유형_대분류, item.사고유형_중분류]));

// const c2 = [];
//     for (let item of data){
//         let temp = [item.사고유형_대분류,item.사고유형_중분류];
//         c2.push(temp);
//     }

// 집합으로 만들기(중복 제거 / {}로 나옴)
c1 = new Set(c1);

// spread(전개) 연산자
c1 = [...c1]

// console.log(c1);
// console.log('c2',c2);



const Taccident = () => {

    //대분류 선택
    const [sel1, setSel1] = useState(0);
    //중분류 선택
    const [sel2, setSel2] = useState([]);
    const [selData, setSelData] = useState({});
    
    // useEffect(() => {
    //     console.log('Taccident sel1 useeffect []', sel1);
    // }, []);

    useEffect(() => {
        console.log('Taccident sel1 useeffect', sel1);
    },[sel1]);

    useEffect(() => {
        console.log('Taccident sel1 useeffect', sel2);
        let temp = data.filter((item) => 
            item.사고유형_대분류 === sel2[0]
                && item.사고유형_중분류 === sel2[1]);
                setSelData(temp[0]);
        
    },[sel2]);

    useEffect(() => {
        console.log('Taccident selData useeffect', selData);
    }, [selData]);
    

    return (
        <main className='container'>
            <article>
                <header>
                    <TaccidentNav1 c1={c1} sel1={sel1} setSel1={setSel1} />
                    <TaccidentNav2 c2={c2} sel1={sel1} sel2={sel2} setSel2={setSel2} />
                    {/* <TaccidentNav3 c2={c2} sel1={sel1} sel2={sel2} setSel2={setSel2} selData={selData} setSelData={setSelData} /> */}
                    
                </header>
            </article>
        </main>

    );

}

export default Taccident;