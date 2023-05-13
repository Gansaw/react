import { useState } from "react";
const BoxRows = ({ mv }) => {
    const [footTag, setFootTag] = useState(0);

    const showMv = (row) => { console.log(row) };

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
                <td>{icon}{Math.abs(inten)}
                </td>
            </tr>
        );
    }

    return (
        <>
            <tbody>
                {trTags}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={4}> {footTag}</td>
                </tr>
            </tfoot>
        </>
    );
}

export default BoxRows;
