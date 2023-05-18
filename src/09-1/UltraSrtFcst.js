import getcode from './getcode.json';

const UltraSrtFcst = () => {
    const list = getcode.map((item) => (
        <option value={item["항목명"]} key={item["항목명"]}></option>
    ));

    const preDate = getcode.map((item) => (
        <option value={item[""]} key={item["항목명"]}></option>
    ));


    return (
   
    );
}

export default UltraSrtFcst;