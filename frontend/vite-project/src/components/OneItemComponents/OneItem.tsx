import React, {useState} from 'react';
import product from '../../images/product.jpg';
import styles from './style.module.css';
import {Link} from 'react-router-dom';
import { Path } from '../../Path';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const OneItem: React.FC = () => {
    const dispatch = useDispatch();
    const sizes = [
        {label: '300г', value: 300},
        {label: '500г', value: 500},
        {label: '600г', value: 600},
        {label: '1000г', value: 1000},
    ];

    const [selectedSize, setSelectedSize] = useState<number | null>(null);

    const handleSizeClick = (value: number) => {
        setSelectedSize(value);
    };

    const [value, setValue] = useState<string>('1');

    const handleFocus = () => {
        if (value === '1') {
            setValue('');
        }
    };

    const handleBlur = () => {
        if (value.trim() === '') {
            setValue('1');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.currentTarget.blur(); 
        }
    };

    const handleAddToCart = () => {
        const item = {
            id: 'unique-item-id',
            images: ['path/to/image.jpg'],
            title: 'М\'ясні джерки',
            sizes: [selectedSize || 300], 
            price: 200, 
            quantity: 1,
        }
        dispatch(addToCart(item))
    }

    return (
        <section className={styles.oneItem}>
            <button className={styles.backBtn}>Назад</button>
            <div className="container">

                <h1>
                    М'ясні джерки <b>«Часникові»</b>
                </h1>

                <div className={styles.pageNavigation}>
                    <Link to={Path.home} className={styles.page}>Головна</Link>
                    <div className={styles.minus}>—</div>
                    <Link to="#" className={styles.page}>
                        М'ясні джерки
                    </Link>
                    <div className={styles.minus}>—</div>
                    <Link to={Path.producOneBytId} className={styles.page}>
                        М'ясні джерки «Часникові»
                    </Link>
                </div>

                <div className={styles.productInfo}>
                    <div className={styles.leftContent}>
                        <img src={product} alt="" className={styles.productImg}/>
                    </div>

                    <div className={styles.rightContent}>
                        <b className={styles.price}>₴200</b>

                        <div className={styles.sizeChoosing}>
                            <div className={styles.chooseSize}>Виберіть розмір</div>

                            <div className={styles.sizeOptions}>
                                {sizes.map((size) => (
                                    <button
                                        key={size.value}
                                        className={`${styles.sizeButton} ${selectedSize === size.value ? styles.selected : ''}`}
                                        onClick={() => handleSizeClick(size.value)}
                                        aria-pressed={selectedSize === size.value}
                                    >
                                        {size.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.quantityWrapper}>
                            <input
                                type="text"
                                value={value}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                                className={styles.quantityInput}
                            />

                            <button onClick={handleAddToCart} className="btn">Додати до кошику</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.description}>
                <div className={styles.descTitle}>ТП <b>“MakaJerky”</b></div>
                <br/>
                *Пориньте у світ насиченого смаку з нашим натуральним <br/>
                сушеним м’ясом з відбірної курки та свинини. Ми ретельно <br/>
                відбираємо лише найкращі шматки м’яса, щоб гарантувати <br/>
                найвищу якість і насиченість кожного кусочка. <br/>
                <br/>
                *Процес сушіння зберігає всі поживні речовини та аромати, а <br/>
                також дозволяє отримати ідеальну закуску, багатою білком і <br/>
                низькокалорійною. Без додавання консервантів і штучних <br/>
                інгредієнтів — тільки м’ясо та спеції. <br/>
                <br/>
                *Ідеально підходить для активного способу життя, походів, <br/>
                пікніків або просто для того, щоб насолодитися смачним і <br/>
                корисним перекусом у будь-який час. Спробуйте й <br/>
                переконайтеся в якості нашого продукту самі! <br/>
            </div>
        </section>
    );
};

export default OneItem;
