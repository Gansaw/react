import { useState, useEffect } from "react";
import Codelist from "./Codelist";

const Codegubun = () => {

    const [sel, setSel] = useState();

    const selItem = (e) => {
        setSel(e.target.value);
    }

    useEffect(() => {
        console.log(sel);
    }, [sel]);

    return (
        <main className="container">
            <article>
                <form>
                    <div className="grid">
                        <div>
                            <select id="sel" name="sel" onChange={selItem}>
                                <option value="">선택</option>
                                <option value="단기예보">단기예보</option>
                                <option value="초단기예보">초단기예보</option>
                            </select>
                        </div>
                        <div>
                            {sel === "" ? <h1>값을 선택하세요</h1> : <Codelist sname={sel} />}
                        </div>
                    </div>
                    <footer>
                        <ul>
                            <li></li>
                        </ul>
                    </footer>
                </form>
            </article>
        </main>
    );
}

export default Codegubun;

