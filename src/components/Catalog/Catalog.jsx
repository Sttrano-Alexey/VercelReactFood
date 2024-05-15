
import '../../Styles/catalog.css'
import subImg from '../../Images/main/Rectangle2.png'
import { Link } from 'react-router-dom';


export default function Catalog({onClose}) {

    return (
        <>
            <div className="catalog">
                <div className="catalog-container container">
                    <h5 className="catalog-title title">
                        Наши категории
                    </h5>
                    <div className="categories-column">
                    <div className="categories-column">
                            <div className="categories-items catalogs">
                                <div className="categories-card catalogs">
                                    <img src="https://food.pibig.info/uploads/posts/2023-09/1693901493_food-pibig-info-p-sup-s-kuritsei-i-krevetkami-vkontakte-13.jpg" alt="" />
                                    <h4>Супы и горячие блюда</h4>
                                    <p>Погрузитесь в разнообразие ароматов и вкусов с нашей коллекцией супов. От классических бульонов до экзотических крем-супов — у нас есть всё, чтобы удовлетворить любой вкус.</p>
                                    <Link to={`/products/1`} className="card-btn btn" onClick={onClose}>
                                        Хочу суп!
                                    </Link>
                                </div>
                                <div className="categories-card catalogs">
                                    <img src="https://karamelcafe.ru/wp-content/uploads/a/8/d/a8de5ffd397c49bddfa06bfe7a6f6d13.jpeg" alt="" />
                                    <h4>Гарниры</h4>
                                    <p>Гарнир - это настоящая путта из индийского кулинарного искусства. Он состоит из разнообразных ароматов и вкусов, которые обеспечивают вам нежную и неповторимую кухню.</p>
                                    <Link to={`/products/2`} className="card-btn btn" onClick={onClose}>
                                        Хочу гарнир!
                                    </Link>
                                </div>
                                <div className="categories-card catalogs">
                                    <img src="https://mykaleidoscope.ru/uploads/posts/2021-10/1634765281_1-mykaleidoscope-ru-p-tvorozhnie-deserti-1.jpg" alt="" />
                                    <h4>Десерты</h4>
                                    <p>Десерты - это нечто особенное, которое оставляет на вас хорошее впечатление и заставляет вас чувствовать себя полным и счастливым.</p>
                                    <Link to={`/products/3`} className="card-btn btn" onClick={onClose}>
                                        Хочу десерт!
                                    </Link>
                                </div>
                                <div className="categories-card catalogs">
                                    <img src="https://attuale.ru/wp-content/uploads/2018/02/chicken-slaw-salad.jpg" alt="" />
                                    <h4>Салаты</h4>
                                    <p>Салаты - это настоящий источник питательности и вкуса. Наша коллекция салатов предлагает разнообразие вкусов и ароматов</p>
                                    <Link to={`/products/4`} className="card-btn btn" onClick={onClose}>
                                        Хочу салат!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog-bg" onClick={onClose}>

                </div>
            </div>
        </>
    )
}