// const BoxRows = (probs) => {
const BoxRows = ({ mv }) => {
    // const mvlist = [...probs.mv];
    // console.log("BoxRows", mvlist);
    console.log("BoxRows", mv);
    let trTags = [];
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten)
        let icon;
        let inten = parseInt(row.rankInten);
        if(inten == 0) icon = "⏹";
        else if(inten > 0) icon = "🔼";
        else icon = "🔽";

        trTags.push(
            <tr className = "mytr" key={row.movieCd}>
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
            {trTags}
        </>
    );
}

export default BoxRows;