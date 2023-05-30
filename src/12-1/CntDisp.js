import { Link } from "react-router-dom";
import { CntAtoms, CntAtomsTwice } from "./CntAtoms";
import { useRecoilValue } from "recoil";

const CntDisp = () => {
    
    const num = useRecoilValue(CntAtoms);
    const num2 = useRecoilValue(CntAtomsTwice);

    return (
        <article>
            <div className="grid">
                <h2>입력값 : {num}</h2>
                <h2>입력값 2배 : {num2}</h2>
            </div>
            <footer>             
            <Link to='/'>입력화면이동</Link>                           
            </footer>
        </article>
    );
}

export default CntDisp;