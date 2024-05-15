import React, { useState, useEffect } from 'react';
import toCart from '../../Images/icons/toCart.svg';
import minus from '../../Images/icons/minus.svg';
import plus from '../../Images/icons/plus.svg';
import { CartContext } from "../../Contexts/CartCountContext";
import { useContext } from 'react';

export default function ProductsCard({ id, name, img, price, card_description }) {

  const { cartLength, updateCartLength } = useContext(CartContext);

  const [isAdded, setIsAdded] = useState(false);
  const [count, setCount] = useState(1);

  // Функция для обновления Local Storage
  const updateLocalStorage = (newCount) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    cart[id] = newCount;
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  // Функция для проверки наличия товара в корзине
  const checkCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (cart[id]) {
      setIsAdded(true);
      setCount(cart[id]);
    }
  };

  // Эффект для проверки при монтировании компонента
  useEffect(() => {
    checkCart();
  }, []);

  const handleAddToCart = () => {
    setIsAdded(true);
    updateLocalStorage(count);
    updateCartLength(prevCartLength => prevCartLength + 1);
  };

  const handleCountChange = (delta) => {
    setCount(prevCount => {
      const newCount = prevCount + delta;
      if (newCount <= 0) {
        // Удаляем товар из корзины
        const cart = JSON.parse(localStorage.getItem('cart')) || {};
        delete cart[id];
        localStorage.setItem('cart', JSON.stringify(cart));
        setIsAdded(false);
        return 0;
      } else {
        // Обновляем количество товара в корзине
        updateLocalStorage(newCount);
        return newCount;
      }
    });
  };

  return (
    <div className={`productsList-card ${isAdded ? 'added' : ''}`} data-id={id}>
      <img src={img} alt={name}/>
      <div className="poductsList-card-body">
        <div className="productsList-card-header">
          <h5>{name}</h5>
          <p>{price} ₽</p>
        </div>
        <p className="productsList-card-desc">
          {card_description}
        </p>
        <div className="productsList-card-footer">
          <a className="link-to-info" href={`/productsInfo/${id}`}>Подробнее</a>
          <button className="add-to-cart-btn" data-id={id} onClick={handleAddToCart}>
            <img src={toCart} alt="Добавить в корзину" />
          </button>
          {isAdded && (
            <div className="added-to-cart">
              <p className="added-to-cart-price">
                {price * count} ₽
              </p>
              <div className="card-count">
                <button data-action="minus" onClick={() => handleCountChange(-1)}>
                  <img src={minus} alt="Уменьшить количество" />
                </button>
                <span className="card-count-value">{count}</span>
                <button data-action="plus" onClick={() => handleCountChange(1)}>
                  <img src={plus} alt="Увеличить количество" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}