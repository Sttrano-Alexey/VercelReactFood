import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Инициализируем cartLength количеством уникальных ключей в localStorage
  const [cartLength, setCartLength] = useState(Object.keys(JSON.parse(localStorage.getItem('cart') || '{}')).length);

  // Функция для обновления cartLength
  const updateCartLength = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '{}');
    setCartLength(Object.keys(cartItems).length);
  };

  // Добавляем слушатель события storage для автоматического обновления cartLength
  useEffect(() => {
    const handleStorageChange = () => {
      updateCartLength(); // Обновляем cartLength при изменении данных в localStorage
    };

    window.addEventListener('storage', handleStorageChange);

    // Удаляем слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <CartContext.Provider value={{ cartLength, updateCartLength }}>
      {children}
    </CartContext.Provider>
  );
};