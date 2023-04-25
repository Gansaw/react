import { useState } from "react";

const nowTime = () => {
    setMyTime(myTime + new Date().toLocaleDateString);
    console.log(myTime);
};

const MyClockTime = () => {
    let t = useState(new Date().toLocaleTimeString);
    const [myTime, setMyTime] = useState(t);

    let cnt = 0;
    // setTimeout(console.log(++cnt), 1000);


    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;