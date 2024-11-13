import React from 'react';
import styles from './style.module.css';
import '../../App.css';
import searchIcon from '../../images/searchIcon.svg';
import useSearch from "../../hooks/useSearch";
import basketIcon from '../../images/basketIcon.svg';
import {Link} from 'react-router-dom';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Path } from '../../Path';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';


const Header: React.FC = () => {
    const cart =useSelector(selectCart);
    const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
    const onSearch = (term: string) => {
        console.log(`Виконати пошук для: ${term}`); 
    };

    const {
        searchTerm,
        handleSearchChange,
        handleSearchSubmit,
    } = useSearch(onSearch);

    return (
        <div>
            <div className={styles.headerTitle}>
                Найкращий смак тільки у нас
            </div>

            <header className={styles.headerContent}>
                <div className="container flex">
                    <BurgerMenu/>
                    <div className={`${styles.adaptive} flex`}>
                        <label htmlFor="header__search"
                               className={`${styles.header__label} flex`}>

                            <img src={searchIcon}
                                 alt="Що ви шукаєте?"/>
                            <div className={styles.searchText}>
                                Пошук
                            </div>
                        </label>
                        <input
                            type="text"
                            className={`${styles.header__search} header__search`}
                            id={styles.header__search}
                            placeholder='Що ви шукаєте?'
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onKeyDown={handleSearchSubmit}
                        />
                    </div>

                    <Link to={Path.cart} className={styles.basket}>
                        <img src={basketIcon} alt=""/>
                        <div className="basketText">Кошик {totalItems}</div>
                    </Link>

                    <Link to={Path.order} className={styles.design}>
                        <div className="basketText">Оформлення</div>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Header;
