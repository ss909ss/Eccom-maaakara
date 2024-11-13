import React, { useState } from 'react';
import styles from './style.module.css';

const BurgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.burgerMenuContainer}>
            <div className={styles.burgerIcon} onClick={toggleMenu}>
                ☰
            </div>

            {isOpen && (
                <div className={styles.menu}>
                    <div className={styles.closeMenu} onClick={toggleMenu}>
                        ✖
                    </div>
                    <button className={styles.menuItem}>Усі</button>
                    <button className={styles.menuItem}>М'ясні джерки</button>
                    <button className={styles.menuItem}>Свинячі джерки</button>
                    <button className={styles.menuItem}>Ковбаски</button>
                    <button className={styles.menuItem}>Набори</button>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
