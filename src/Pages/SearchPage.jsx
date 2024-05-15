import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchCard from '../components/Products/SearchCard';
import data from '../../public/DATA/products.json';

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (query && query.length >= 3) {
            const searchQuery = query.toLowerCase();
            const allProducts = data.products.flatMap(category => category.items);
            const matchedProducts = allProducts.filter(product =>
                product.name.toLowerCase().includes(searchQuery) ||
                product.full_description.toLowerCase().includes(searchQuery)
            );
            setFilteredProducts(matchedProducts);
        }
    }, [query]);

    return (
        <section className="searchMain">
            <div className="searchMain-container container">
                {filteredProducts.length > 0 ? (
                    <>
                        <div className='searchMain-title title'>По вашему запросу "<span>{query}</span>" найдено:</div>
                        <div className="searchMain-body">
                            {filteredProducts.map((product) => (
                                <SearchCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    img={product.img}
                                    price={product.price}
                                    card_description={product.card_description}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className='searchMain-title title'>По вашему запросу "<span>{query}</span>" ничего не найдено...</div>
                )}
            </div>
        </section>
    );
}