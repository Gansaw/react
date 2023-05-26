import { useState, useEffect } from "react";
import FcstTb from "./FcstTb";
import { useParams } from "react-router-dom";

const Vilage = () => {
  const [items, setItems] = useState();

  const dt = useParams().dt;
  const x = useParams().x;
  const y = useParams().y;  

  useEffect(() => {
    let url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?";
    url = url + "serviceKey=sf3ip2B6hnhTGWtWVKPKJ1YPCP1HkocEZ7NaiBJiUbBoaYUhuPMMqRdoadGuR1w0PI783p7%2Btrb6Rkip5TXLqA%3D%3D";
    url = url + "&numOfRows=60";
    url = url + "&pageNo=1";
    url = url + `&base_date=${dt}`;
    url = url + "&base_time=0500";
    url = url + `&nx=${x}`;
    url = url + `&ny=${y}`;
    url = url + "&dataType=JSON";

    console.log(url);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setItems(data.response.body.items.item))
      .catch((err) => console.log(err));
  }, [dt, x, y]);

  useEffect(() => {
    console.log("items", items);
  }, [items]);

  return (
    <>
      {items && <FcstTb items={items} gubun="단기예보" />}
    </>
  );
};

export default Vilage;

