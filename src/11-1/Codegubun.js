import { useEffect } from "react";
import {CodeAtom} from './CodeAtom' ;
import { useRecoilState } from "recoil";

const CodeGubun = () => {
    const [sel, setSel] = useRecoilState(CodeAtom);

    const selItem = (e) => {
        console.log(e.target.value)
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
                    </div>
                </form>
            </article>
        </main>
    );
}

export default CodeGubun;