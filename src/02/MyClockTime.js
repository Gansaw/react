const MyClockTime = () => {
    let myTime = new Date().toLocaleTimeString() ;

    // 2. state 변수 선언
    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;