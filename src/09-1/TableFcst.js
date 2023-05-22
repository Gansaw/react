import getcode from './getcode.json';
import FcstMain from './FcstMain';

const TableFcst = () => {

    const preList = getcode.map((item) => (
        <option value={item['항목값']} key={item['항목값']}>
          {item['항목명']}
        </option>
      ));

      const preDate = () => {

      }

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">항목명</th>
                    <th scope="col">예측일자</th>
                    <th scope="col">예측시간</th>
                    <th scope="col">예보값</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{preList}</th>
                    <th>{preDate}</th>
                    <th></th>
                    <th></th>
                </tr>
            </tbody>
        </table>
    );
}

export default TableFcst;