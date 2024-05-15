import logo from '../../Images/icons/logo.svg'
import auth from '../../Images/icons/auth.svg'
import search from '../../Images/icons/search.svg'
import cartIcon from '../../Images/icons/cartIcon.svg'
import Search from '../Search/Search'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartCountContext'
import Catalog from '../Catalog/Catalog'


export default function Header() {

    const { cartLength, updateCartLength } = useContext(CartContext);

    const [openCatalog, setOpenCatalog] = useState(false);

    const [isSearchActive, setSearchActive] = useState(false);

    // Функция для открытия поиска
    const openSearch = () => {
        setSearchActive(true);
    };

    // Функция для закрытия поиска
    const closeSearch = () => {
        setSearchActive(false);
    };

    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <div className="header-column">
                        <button className="catalog-btn btn" onClick={() => setOpenCatalog(true)}>Наш каталог</button>
                        <nav className="header-nav">
                            <ul>
                                <li><a href="/">Главная</a></li>
                                <li><a href="/about">О нас</a></li>
                                <li><a href="/contacts">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-logo">
                        <a href="">
                            <img src={logo} alt="" />
                            FoodStore
                        </a>
                    </div>
                    <div className="header-column">
                        {/* <a href="" className="header-btn">
                            <img src={auth} alt="" />
                            Войти
                        </a> */}
                        <button className="header-btn" onClick={openSearch}>
                            <img src={search} alt="" />
                            Поиск по сайту
                        </button>
                        <div className="cart-icon-div">
                            <a className="cart-a" href="/cart">
                                <span className='cart-count'>{cartLength}</span>
                                <img src={cartIcon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <Search isActive={isSearchActive} closeSearch={closeSearch}></Search>
            {openCatalog && <Catalog onClose={() => setOpenCatalog(false)}></Catalog>}
        </>
    )
}