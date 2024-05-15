import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductsCard from "./ProductsCard";

// Модифицированная функция для получения товаров по категории или всех товаров
const fetchProducts = async (categoryId) => {
    const response = await fetch('../../../public/DATA/products.json');
    const data = await response.json();
    let productsArray = [];

    if (categoryId) {
        const category = data.products.find(cat => cat.id.toString() === categoryId);
        if (category) {
            productsArray = category.items;
        }
    } else {
        data.products.forEach(category => {
            productsArray.push(...category.items);
        });
    }

    return productsArray;
};

export default function ProductsMain() {



    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(8);
    const { categoryId } = useParams();

    useEffect(() => {
        fetchProducts(categoryId).then(data => {
            setAllProducts(data);
            setProducts(data.slice(0, visibleCount));
        });
    }, [categoryId]);


    const loadMoreProducts = () => {
        if (products.length < allProducts.length) {
            setProducts(allProducts);
        } else {
            setProducts(allProducts.slice(0, visibleCount));
        }
    };

    return (
        <>
            <section className="productsList">
                <div className="productsList-container container">
                    <h3 className="productsList-title title">Наши блюда:</h3>
                    <div className="productsList-items">
                        {products.map(item => <ProductsCard key={item.id} {...item} />)}
                    </div>
                    <button

                        id="show-more-btn"
                        className="show-more-btn btn"
                        onClick={loadMoreProducts}>
                        {products.length < allProducts.length ? 'Загрузить еще' : 'Скрыть'}
                    </button>
                </div>
            </section>
        </>
    );
}