import { useNavigate } from "react-router-dom";
import { Navigation } from "../Navigation";
import { Logo } from "../Logo";
import "./style.css";

export const Header = () => {
    const navigate = useNavigate();
    return <div className="header">
        <div className="header__logo" onClick={() => navigate("/")}>
            <Logo />
        </div>
        <div className="header__nav">
            <Navigation />
        </div>
    </div>
}