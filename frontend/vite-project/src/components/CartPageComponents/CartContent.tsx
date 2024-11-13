import { Link } from 'react-router-dom';
import styles from './style.module.css'
import { Path } from '../../Path';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, selectCart } from '../../redux/slices/cartSlice';

function CartContent() {
    const { items, totalPrice,  } = useSelector(selectCart);
    const dispatch = useDispatch();
    

    return (
        <section className={styles.cart}>
            <h1>
                Кошик
            </h1>
            <div className={styles.pageNavigation}>
                <Link to={Path.home} className={styles.page}>Головна</Link>
                <div className={styles.minus}>
                    —
                </div>
                <Link to={Path.cart} className={styles.page}>Кошик</Link>
            </div>

            <div className={styles.content}>
                <div className={styles.topContent}>
                    <div className={styles.item}>Товар</div>
                    <div className={styles.item}>Ціна</div>
                    <div className={styles.item}>Кількість</div>
                    <div className={styles.item}>Всього</div>
                </div>
            </div>

            {items.map((item) => (
                    <div className={styles.productInCart} key={item.id}>
                        <button className={styles.dagger} onClick={() => dispatch(removeItem(item.id))}>×</button>
                        <img src={item.images[0]} alt={item.title} className={styles.productPhoto} />
                        <div className={styles.adaptiveWrapper}>
                            <div className={styles.productName}>{item.title}</div>
                            <div className={styles.price}>₴{item.price}</div>
                            <div className={styles.quantity}>{item.quantity}</div>
                            <div className={styles.summaryPrice}>₴{item.price * item.quantity}</div>
                        </div>
                    </div>
                ))}
          

            <div className={styles.summary}>
                <div className="flex">
                    <div className={styles.sum}>
                        Всього: <span>₴{totalPrice}</span>
                    </div>
                    <Link to={Path.order} className={`${styles.btn} btn`}>
                        Оформити <span>замовлення</span> {/*спан для адаптива*/}
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CartContent;
