// const CntDisp = (probs) => {
//     const num = probs.num;

const CntDisp = ({num}) => {
    return (        
            <article>
                <div className="grid">
                    <h2>입력값 : {num}</h2>
                    <h2>입력값 2배 : {2 * num}</h2>
                </div>
            </article>        
    );
}

export default CntDisp;