import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/info.css';
import imgInfo from '../Images/main/Rectangle4.png';


export default function ProductsInfo() {
  const { itemId } = useParams(); // Получаем id продукта из URL
  const [productInfo, setProductInfo] = useState(null);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Функция для загрузки данных о продукте
    const fetchProductInfo = async () => {
      try {
        const response = await fetch('../../public/DATA/products.json'); // Загружаем JSON файл
        const data = await response.json();
        const product = data.products
          .flatMap(category => category.items)
          .find(item => item.id.toString() === itemId); // Находим продукт по id
        setProductInfo(product); // Обновляем состояние информацией о продукте
      } catch (error) {
        console.error('Ошибка при получении данных о продукте:', error);
      }

    };

    const checkCartStatus = () => {
      const cartData = JSON.parse(localStorage.getItem('cart')) || {};
      setIsInCart(cartData.hasOwnProperty(itemId));
    };

    fetchProductInfo();
    checkCartStatus();
  }, [itemId]);

  if (!productInfo) {
    return <div>Загрузка информации о продукте...</div>;
  }

  const addToCart = () => {
    let cartData = JSON.parse(localStorage.getItem('cart')) || {};
    // Если товар уже есть в корзине, увеличиваем количество
    if (cartData.hasOwnProperty(itemId)) {
      cartData[itemId] += 1;
    } else {
      // Если товара нет, добавляем его с количеством 1
      cartData[itemId] = 1;
    }
    // Сохраняем обновленную корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    // Обновляем состояние, чтобы отразить изменение в интерфейсе
    setIsInCart(true);
  };

  return (
    <>
      <section className="productsInfo">
        <div className="productsInfo__container container">
          <div className="productsInfo-body">
            <div className="productsInfo-column">
              <img src={productInfo.img || imgInfo} alt={productInfo.name} />
            </div>
            <div className="productsInfo-column info">
              <h5 className="productsInfo-title">{productInfo.name}</h5>
              <p className="productsInfo-text">
                {productInfo.full_description}
              </p>
              <h6 className="productsInfo-subtitle">Ингредиенты:</h6>
              <p className="productsInfo-subtext">
                {productInfo.ingredients}
              </p>
              <div className="productsInfo-buttons">
                {isInCart ? (
                  <button id="setToCart" className="btn" disabled>Уже в корзине</button>
                ) : (
                  <button id="setToCart" className="btn" onClick={addToCart}>В корзину</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}