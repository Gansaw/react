// const CodeList = (probs) => {
    import code from '../10-1/getcode.json' ; 
    import {CodeAtom} from './CodeAtom' ;
    import { useRecoilValue } from "recoil";
    const CodeList = () => {    
        const sell = useRecoilValue(CodeAtom) ; 
        let temp = code.filter((i) => i["예보구분"] ===sell ) ;
        // console.log(temp)
        
        let opTags = temp.map((i) => 
            <option key={i["항목값"]} value={i["항목값"]}>{i["항목명"]}({i["항목값"]})</option>
        );
        // console.log(opTags)
        return (
            <article>
                <select id='sel2' name='sel2' defaultValue=''>
                    <option value=''>선택</option>
                    {opTags}
                </select>
            </article>
        );
    }
    
    export default CodeList ;