import style from './Taccident.module.css';

const TaccidentNav3 = ({selData}) => {

    // const btTag3 = selData ? 
    //     <ul>
    //         <li>사고건수: {selData.사고건수}</li>
    //         <li>사망자수: {selData.사망자수}</li>
    //         <li>중상자수: {selData.중상자수}</li>
    //         <li>경상자수: {selData.경상자수}</li>
    //         <li>부상신고자수: {selData.부상신고자수}</li>
    //     {/* selData값이 존재하지 않는 경우 null을 할당해야 랜더링할 때 오류가 발생하지 않음!! */}
    //     </ul> : null;
        
        if(!selData){
            return null;
        }

        const tagKey = ['사고건수', '사망자수','중상자수','경상자수','부상신고자수'];
        let btTag3 = tagKey.map((k,idx)=>
            <div key = {'k' + idx}>
            {k} {selData[k]}
            </div>
        )
            

        

    return (

        <div className = {style.tag3}>
        <div className='grid'>
            
            {btTag3}

        </div>
        </div> 

    );

}

export default TaccidentNav3;
