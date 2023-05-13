// 1/ useState import
import {useState} from 'react';

const MyClockTime1 = () => {
        // 2. state 변수 선언
        const [myTime, setMyTime] = useState(new Date().toLocaleTimeString());
        
        // 3. 초당 변경되도록 state 변수 변경
        setInterval(() => {
            setMyTime(new Date().toLocaleTimeString());
        }, 1000);

    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime1;