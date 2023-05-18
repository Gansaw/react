import { useParams } from "react-router-dom";

const RoutePage1 = () => {
    const fruit = useParams().item;
    const fruit2 = useParams().item2; 
    return(
        <article>
        <header><h2>RoutePage1</h2></header>
            <h3>{fruit}</h3>
            <h3>{fruit2}</h3>
    </article>

    );
}

export default RoutePage1;
