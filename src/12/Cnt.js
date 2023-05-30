import { useState, useEffect } from "react";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";

const Cnt = () => {    

    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log(num)
    }, [num]);

    return (
        <main className="container">
            <CntInput num = {num} setNum = {setNum}/>
            <CntDisp num = {num}/>
        </main>
    );
}

export default Cnt;