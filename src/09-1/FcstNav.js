import { Link } from "react-router-dom";

const FcstNav = () => {

    return (
        
        <nav>            
            기상청 단기 예보
            <li><Link to='/' role="button">단기예보확인</Link></li> 
        </nav>

    );
}

export default FcstNav;