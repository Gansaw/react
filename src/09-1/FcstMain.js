import React from "react";
import { Link } from "react-router-dom";
import getxy from "./getxy.json";

const FcstMain = () => {
    const ops = getxy.map((item) => (
        <option value={item["행정구역코드"]} key={item["행정구역코드"]}>
            {item["1단계"]}
        </option>
    ));

    return (
        <article>
            <header>단기예보선택</header>
            <div className="grid">
                <div>
                    <input type="date" id="dt" name="dt"></input>
                </div>
                <div>
                    <select id="sel" required>
                        <option>선택</option>
                        {ops}
                    </select>
                </div>
            </div>
            <footer>
                <div>
                    <div className="grid">
                        <Link to="/ultra/:dt/:area/:x/:y" role="button">초단기예보</Link>
                        <Link to="/vilage/:dt/:area/:x/:y" role="button">단기예보</Link>
                    </div>
                </div>
            </footer>
        </article>
    );
};

export default FcstMain;
