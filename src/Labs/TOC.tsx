import { Link } from "react-router-dom";

export default function TOC(){

    return (
        <div>
            <ul>
                <li><Link to="/Labs">Labs</Link></li>
                <li><Link to="/Lab1">Lab 1</Link></li>
                <li><Link to="/Lab2">Lab 2</Link></li>
                <li><Link to="/Lab3">Lab 3</Link></li>
                <li><Link to="/Kanbas">Kanbas</Link></li>
            </ul>
        </div>
    );
}