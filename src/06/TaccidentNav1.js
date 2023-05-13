import style from './Taccident.module.css';

const TaccidentNav1 = ({c1, sel1, setSel1}) => {

    // const show = (item) => {console.log(item)}
    const btTag = c1.map((item) =>
        <li key={item}>
            <button onClick={() => setSel1(item)}>{item}</button></li>);
    
    return (

        <nav>
            <ul>
                <li className={style.li1}>사고유형 대분류</li>
            </ul>
            <ul>
                {btTag}
            </ul>
        </nav>

    );

}

export default TaccidentNav1;