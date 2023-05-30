import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CntAtoms } from "./CntAtoms";

const CntInput = () => {

    const [num, setNum] = useRecoilState(CntAtoms);

    const minus = (e) => {
        e.preventDefault();
        setNum(num - 1);
        if (num - 1 < 0)
            setNum(0);
    }

    const plus = (e) => {
        e.preventDefault();
        setNum(num + 1);
        if (num + 1 > 100)
            setNum(100);
    }


    return (
        <article>
            <form>
                <div className="grid">
                    <button onClick={(e) => minus(e)}>-</button>
                    <input type="text" id="txt1" name="txt1" value={num} readOnly />
                    <button onClick={(e) => plus(e)}>+</button>
                </div>
                <footer>
                    <Link to='/disp'>출력화면이동</Link>
                </footer>
            </form>
        </article>
    );
}

export default CntInput;