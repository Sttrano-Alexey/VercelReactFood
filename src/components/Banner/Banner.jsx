import bannerImg from '../../Images/main/banner.png'
import { Link } from 'react-router-dom';



export default function Banner() {

    return (
        <>
            <div className="banner">
                <div className="banner-container container">
                    <div className="banner-column">
                        <h2 className="banner-title"><span>-30%</span> на все салаты!</h2>
                        <p className="banner-text">Успей заказать СВОй на нашем сайте</p>
                        <Link to={`/products/4`} className="banner-btn btn">
                            Перейти к салатам
                        </Link>
                    </div>
                    <div className="banner-column">
                        <img src={bannerImg} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}