import logo from '../../Images/icons/logo.svg'
import vk from '../../Images/icons/vk.svg'
import tg from '../../Images/icons/tg.svg'
import wa from '../../Images/icons/wa.svg'
import phone from '../../Images/icons/phone.svg'



export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container container">
                    <div className="footer-column">
                        <div className="header-logo">
                            <a href="">
                                <img src={logo} alt="" />
                                FoodStore
                            </a>
                        </div>
                    </div>
                    <div className="header-column">
                        <nav className="header-nav">
                            <ul>
                                <li><a href="/">Главная</a></li>
                                <li><a href="/about">О нас</a></li>
                                <li><a href="/contacts">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer-column">
                        <div className="footer-contacts-items">
                            <a href="">
                                <img src={vk} alt="" />
                            </a>
                            <a href="">
                                <img src={tg} alt="" />
                            </a>
                            <a href="">
                                <img src={wa} alt="" />
                            </a>
                        </div>
                        <a className="footer-phone" href="tel:+123456789">
                            <img src={phone} alt="" />
                            +7 (228) 666-14-88
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}