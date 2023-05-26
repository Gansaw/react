import { useState } from "react";
import FcstMain from "./FcstMain";
import getcode from "./getcode.json"

const TableFcst = () => {

  const [trTags, setTrTags] = useState();
     

  return (
    <main>
      <article>
        <div>
          {/* <h3>${getSel}</h3> */}
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col">항목명</th>
              <th scope="col">예측일자</th>
              <th scope="col">예측시간</th>
              <th scope="col">예보값</th>
            </tr>
          </thead>
        </table>
      </article>
    </main>
  );
}

export default TableFcst;