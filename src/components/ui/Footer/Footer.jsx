import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import "./style.css";

export const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="footer__logo">
                <Logo />
            </div>
            <div className="footer__links">
                <div className="footer__links__left">
                    <p>Избранное</p>
                    <p onClick={() => navigate("/cart")}>Корзина</p>
                    <p>Контакты</p>
                </div>
                <div className="footer__links__right">
                    <p>Условаия сервиса</p>
                </div>
            </div>
            <div className="footer__social">
                <div className="footer__social__icon">
                    <img src="/images/VK.png" alt="#" />
                </div>
                <div className="footer__social__icon">
                    <img src="/images/Telegram.png" alt="#" />
                </div>
                <div className="footer__social__icon">
                    <img src="/images/Whatsapp.png" alt="#" />
                </div>
            </div>
        </div>
    );
};