import logo from '../../assets/imgs/logo.svg';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="container header">
            <div className="header-logo">
                <img src={logo} alt="Logo"/>
                <span>EcoGarbage</span>
            </div>
            <div className="header-buttons">
                <Link  className="header-login" to={"/"}>Вход</Link >
                <Link  className="header-register" to={"/"}>Регистрация</Link >
            </div>
        </div>
    );
}
