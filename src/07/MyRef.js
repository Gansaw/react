import { useState, useRef, useEffect } from "react";
import style from "./MyRef.module.css";

const MyRef = () => {

    const txtRef = useRef();
    // const txtRef2 = useRef();

    // 첫번째 시점 => useEffect(() => {}, []);

    const itemArray = useRef([]);
    const [itemTag, setItemTag] = useState();
    

    useEffect(() => {
        txtRef.current.focus();
    }, []);

    
    const addItem = (e) => {
        e.preventDefault();
        
        if(itemArray.current.includes(txtRef.current.value)) return;
        itemArray.current = [...itemArray.current, txtRef.current.value];
        // itemArray.current = [new Set(itemArray.current)];        

        
        let tempTag = itemArray.current.map((item)=><span className={style.s1}>{item}</span>);
               
        setItemTag(tempTag);
        
        console.log('addItem', itemArray.current);
        txtRef.current.value = "";
        txtRef.current.focus();        

    };

    const resetItem = () => {
        txtRef.current.value = "";
        txtRef.current.focus();
        console.log('resetItem');
        setItemTag(null);
    };

    return (
        <main className= {style.container}>
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1"> 과일/채소 입력</label>
                                <input ref={txtRef} type="text" id="txt1" required />
                                {/* <input ref2={txtRef2} type="text2" id="txt2" required /> */}
                            </div>
                        </div>
                        <div>
                            <button onClick={(e) => addItem(e)}>등록</button>
                            <button onClick={(e) => resetItem(e)}>취소</button>
                        </div>
                    </form>
                </header>
                <div>
                    {itemTag}
                </div>

            </article>
        </main>
    );
}

export default MyRef;
