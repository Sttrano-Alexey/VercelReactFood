import '../../Styles/Search.css';
import React, { useState, useEffect } from 'react';

export default function Search({ isActive, closeSearch }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        // Загрузка истории поиска из локального хранилища при монтировании компонента
        const history = localStorage.getItem('searchHistory');
        if (history) {
            setSearchHistory(JSON.parse(history));
        }
    }, []);

    useEffect(() => {
        // Сохранение истории поиска в локальное хранилище при её изменении
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }, [searchHistory]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchQuery) return;

        // Обновление истории поиска
        setSearchHistory([...searchHistory, searchQuery]);

        // Перенаправление на страницу поиска с параметром поиска
        window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
        
        // Очистка поля ввода
        setSearchQuery('');
    };

    const clearSearchHistory = () => {
        // Очистка истории поиска
        setSearchHistory([]);

        // Удаление истории поиска из локального хранилища
        localStorage.removeItem('searchHistory');
    };

    const searchClass = isActive ? "search active" : "search";

    return (
        <>
            <div className={searchClass}>
                <div className="search-container container">
                    <h5>Поиск по сайту</h5>
                    <div className="search-body">
                        <form className='search-form' onSubmit={handleSearch}>
                            <input 
                                type="text" 
                                placeholder='Введите поисковый запрос'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className='search-go btn'>Найти</button>
                        </form>
                        {/* <div className="search-history"><p>Ваша история запросов:</p> <button onClick={() =>clearSearchHistory}>Очистить</button> </div>
                        <ul>
                            {searchHistory.map((query, index) => (
                                <li key={index}>{query}</li>
                            ))}
                        </ul> */}
                    </div>
                </div>
                <div className="search-bg" onClick={closeSearch}></div>
            </div>
        </>
    );
}