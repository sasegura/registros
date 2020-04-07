import React from "react";
import {Link} from "react-router-dom";

const Menu=()=>(
    <nav id="mainav">
        <ul className="clear">
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/proyecto"}>Proyecto</Link>
            </li>
            <li>
                <Link to={"/proyect"}>Proyect</Link>
            </li>
            <li>
                <Link to={"/registro"}>Registro</Link>
            </li>
            <li>
                <Link to={"/registro2"}>Registro2</Link>
            </li>
            <li>
                <Link to={"/volumen"}>Volumenes</Link>
            </li>
            <li>
                <Link to={"/circular"}>Circular</Link>
            </li>
            <li>
                <Link to={"/cajon"}>Cajon</Link>
            </li>
            <li>
                <Link to={"/cajoncilindro"}>CajonCilindro</Link>
            </li>
        </ul>
    </nav>
);
export default Menu;