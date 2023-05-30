import { useEffect } from "react";
import getcode from "./getcode.json";

// const Codelist = (probs) => {
const Codelist = ({ sname }) => {
    console.log(getcode);

    //filter 사용 -> loop를 돌고 조건에 맞는 값만 출력

    let temp = getcode.filter((i) => i["예보구분"] === sname);
    console.log(temp);

    let opTags = temp.map((i) =>
        <option key={i["항목값"]} value={i["항목값"]}>{i["항목명"]}({i["항목값"]})</option>
    );

    console.log(opTags);

    useEffect(() => {

    });

    return (
        <>
            <select id="sel2" name="sel2" defaultValue="">
                <option value="선택"></option>
                {opTags}
            </select>
        </>
    );
}

export default Codelist;
