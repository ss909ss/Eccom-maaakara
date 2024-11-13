// useSearch.ts
import {useEffect, useState} from 'react';
import styles from "../components/Header/style.module.css";

const useSearch = (onSearch: (term: string) => void) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Визначаємо тип події
    const handleSearchChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(ev.target.value);
    };

    const handleSearchSubmit = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
            onSearch(searchTerm);
            setSearchTerm('');
        }
    };

    useEffect(() => {
        const headerLabel = document.querySelector(`.${styles.header__label}`);
        const headerSearch = document.querySelector(`.${styles.header__search}`);

        console.log('headerLabel:', headerLabel);
        console.log('headerSearch:', headerSearch);

        const toggleSearch = () => {
            headerSearch?.classList.toggle(styles.active);
        };

        if (headerLabel && headerSearch) {
            headerLabel.addEventListener('click', toggleSearch);
        }

        return () => {
            if (headerLabel) {
                headerLabel.removeEventListener('click', toggleSearch);
            }
        };
    }, []);

    return {
        searchTerm,
        handleSearchChange,
        handleSearchSubmit,
    };
};

export default useSearch;
