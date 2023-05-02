const TaccidentNav2 = ({ c2, sel1, sel2, setSel2 }) => {

    const c2Filter = c2.filter((item) => (item[0] === sel1))
    console.log(c2Filter);
    const btTag2 = c2Filter.map((item) =>
        <li key={item}>
            <button onClick={() => setSel2(item)}>{item[1]}</button></li>);


    return (

        <nav>
            <ul>
                <h3>사고유형 중분류</h3>
            </ul>
            <ul>
                {btTag2}

            </ul>
        </nav>

    );

}

export default TaccidentNav2;