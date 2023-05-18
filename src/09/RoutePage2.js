import { useLocation } from "react-router-dom";
import qs from "query-string";

const RoutePage2 = () => {
    const loc = useLocation().search;
    console.log(loc);

    const item = qs.parse(loc).item;
    console.log(item);
    const item2 = qs.parse(loc).item2;
    console.log(item2);

    return(
        <article>
        <header><h2>RoutePage2</h2></header>
        {item}
        {item2}
    </article>

    );
}

export default RoutePage2;