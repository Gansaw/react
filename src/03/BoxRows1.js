import { useState } from "react";
import style from './BoxRows1.module.css';


//부모 -> 자식으로 전달(mvlist) -> probs
const BoxRows = ({ mv }) => {
    const [footTag, setFootTag] = useState("위를 클릭하시면 영화 정보가 나옵니다.");

    // const BoxRows = (probs) => {
    //     const mvlist = [...probs];
    // };


    // 클릭된 자료 확인
    const showMv = (row) => {
        console.log(row);
        let ftTags = `[${row.movieCd}] ${row.movieNm} 개봉일 : ${row.openDt}`
        setFootTag(ftTags);
    };

    let trTags = [];
    for (let row of mv) {
        let icon;
        let inten = parseInt(row.rankInten);
        if (inten === 0) icon = "⏹";
        else if (inten > 0) icon = "🔼";
        else icon = "🔽";

        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td>{icon}{parseInt(row.rankInten) === 0 ? "" : Math.abs(inten)}
                </td>
            </tr>
        );
    }

    return (
        <>
            <tbody className={style.tbody}>
                {trTags}
            </tbody>
            <tfoot className={style.tfoot}>
                <tr id="tfoot">
                    <td className={style.td} colSpan='4'>  {footTag} </td>
                </tr>
            </tfoot>
        </>
    );
}

export default BoxRows;
