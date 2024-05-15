import { Link } from 'react-router-dom';


export default function Categories() {
    return (
        <>
            <section className="categories">
                <div className="categories__container container">
                    <h3 className="categories-title title">
                        У нас также имеются:
                    </h3>
                    <div className="categories-row">
                        <div className="categories-column">
                            <div className="categories-slider">
                                <img src="https://img.goodfon.ru/original/2880x1800/2/dd/desert-panna-kota-sirop-malina-chernika-miata.jpg" alt="" />
                            </div>
                        </div>
                        <div className="categories-column">
                            <div className="categories-items">
                                <div className="categories-card">
                                    <img src="https://food.pibig.info/uploads/posts/2023-09/1693901493_food-pibig-info-p-sup-s-kuritsei-i-krevetkami-vkontakte-13.jpg" alt="" />
                                    <h4>Супы и горячие блюда</h4>
                                    <p>Погрузитесь в разнообразие ароматов и вкусов с нашей коллекцией супов. От классических бульонов до экзотических крем-супов — у нас есть всё, чтобы удовлетворить любой вкус.</p>
                                    <Link to={`/products/1`} className="card-btn btn">
                                        Хочу суп!
                                    </Link>
                                </div>
                                <div className="categories-card">
                                    <img src="https://food.pibig.info/uploads/posts/2023-04/1681317605_food-pibig-info-p-blyudo-befstroganov-pinterest-4.jpg" alt="" />
                                    <h4>Гарниры</h4>
                                    <p>Гарнир - это настоящая путта из индийского кулинарного искусства. Он состоит из разнообразных ароматов и вкусов, которые обеспечивают вам нежную и неповторимую кухню.</p>
                                    <Link to={`/products/2`} className="card-btn btn">
                                        Хочу гарнир!
                                    </Link>
                                </div>
                                <div className="categories-card">
                                    <img src="https://mykaleidoscope.ru/uploads/posts/2021-10/1634765281_1-mykaleidoscope-ru-p-tvorozhnie-deserti-1.jpg" alt="" />
                                    <h4>Десерты</h4>
                                    <p>Десерты - это нечто особенное, которое оставляет на вас хорошее впечатление и заставляет вас чувствовать себя полным и счастливым.</p>
                                    <Link to={`/products/3`} className="card-btn btn">
                                        Хочу десерт!
                                    </Link>
                                </div>
                                <div className="categories-card">
                                    <img src="https://attuale.ru/wp-content/uploads/2018/02/chicken-slaw-salad.jpg" alt="" />
                                    <h4>Салаты</h4>
                                    <p>Салаты - это настоящий источник питательности и вкуса. Наша коллекция салатов предлагает разнообразие вкусов и ароматов</p>
                                    <Link to={`/products/4`} className="card-btn btn">
                                        Хочу салат!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
