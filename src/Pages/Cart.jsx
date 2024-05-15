import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem/CartItem';
import { Link } from 'react-router-dom';



// Функция для получения данных о товарах
async function fetchProductData(ids) {
    const response = await fetch('../../public/DATA/products.json');
    const data = await response.json();
    // Используем flatMap для "выпрямления" массива товаров из всех категорий
    const allItems = data.products.flatMap(category => category.items);
    // Находим товары по их ID
    return ids.map(id => allItems.find(item => item.id === id));
}
export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        // Проверяем наличие товаров в localStorage
        const cartData = JSON.parse(localStorage.getItem('cart'));
        if (cartData) {
            // Получаем массив ID товаров
            const productIds = Object.keys(cartData).map(id => parseInt(id));
            // Загружаем информацию о товарах
            fetchProductData(productIds).then(products => {
                // Обновляем состояние с информацией о товарах
                setCartItems(products.map(product => ({
                    ...product,
                    quantity: cartData[product.id]
                })));
            });
        }
    }, []);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        let newTotalPrice = 0;
        let newTotalQuantity = cartItems.length; // Изменено на количество уникальных товаров

        cartItems.forEach(item => {
            newTotalPrice += item.price * item.quantity;
        });

        setTotalPrice(newTotalPrice);
        setTotalQuantity(newTotalQuantity); // Обновляем общее количество уникальных товаров
    }, [cartItems]);

         // Функция для обновления состояния корзины
         const updateCartState = (id, newQuantity) => {
            const cartData = JSON.parse(localStorage.getItem('cart')) || {};
            cartData[id] = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cartData));
    
            // Обновляем состояние корзины с новыми данными о товарах
            setCartItems(cartItems.map(item => 
                item.id === id ? { ...item, quantity: newQuantity } : item
            ));
        };

        const removeFromCart = (id) => {
            const cartData = JSON.parse(localStorage.getItem('cart')) || {};
            delete cartData[id];
            localStorage.setItem('cart', JSON.stringify(cartData));
        
            // Обновляем состояние cartItems, чтобы исключить удаленный товар
            setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        };

        function getCorrectWordForm(totalQuantity) {
            let remainder10 = totalQuantity % 10;
            let remainder100 = totalQuantity % 100;
          
            if (remainder10 === 1 && remainder100 !== 11) {
              return 'товар';
            } else if (remainder10 >= 2 && remainder10 <= 4 && (remainder100 < 10 || remainder100 >= 20)) {
              return 'товара';
            } else {
              return 'товаров';
            }
          }

          let wordForm = getCorrectWordForm(totalQuantity);

    return (
        <>
            <section className="cart">
                <div className="cart-container container">
                    <div className="cart-header">
                        <Link to="/" className="cart-back">
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="52" height="52" rx="26" fill="#EAD9B5" />
                                <path d="M13 26L38 26M13 26L19.25 32M13 26L19.25 20" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Корзина
                        </Link>
                        <div className="cart-info">
                        <p>У вас <span className="cart-quanty">{totalQuantity}</span> {wordForm} на сумму: <span className="cart-total-sum">{totalPrice} ₽</span></p>
                        </div>
                    </div>
                    <div className="cart-body">
                    {cartItems.length > 0 ? (
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <CartItem key={item.id} {...item} updateCartState={updateCartState} removeFromCart={removeFromCart}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty-cart-message">
                        В корзине нет товаров
                        <a href="/" className='empty-link btn'>На главную</a>
                    </div>
                )}
                    </div>
                </div>
                {cartItems.length > 0 ? (
                    <button className='create-order-btn btn'>Оформить заказ</button>
                ): ''}
            </section>
        </>
    );
}

