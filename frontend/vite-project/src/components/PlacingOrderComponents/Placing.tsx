
import styles from "./style.module.css";
import {Link} from "react-router-dom";

function Placing() {
    return (
        <div className="container">
            <section className={styles.placingOrder}>
                <h1>
                    Оформлення замовлення
                </h1>
                <div className={styles.pageNavigation}>
                    <Link to="/" className={styles.page}>Головна</Link>
                    <div className={styles.minus}>
                        —
                    </div>
                    <Link to="/PlacingOrder" className={styles.page}>Оформлення</Link>
                </div>

                <div className={styles.placingForm}>
                    <form className={`${styles.buyerData} ${styles.placingForm__items}`}>
                        <h2 className={styles.placingForm__title}>Дані покупця</h2>
                        <input type="text" placeholder="Ім'я"/>
                        <input type="text" placeholder="Прізвище"/>
                        <input type="number" placeholder="Телефон"/>
                        <input type="email" placeholder="Email"/>
                    </form>

                    <form className={`${styles.yourOrder} ${styles.placingForm__items}`}>
                        <h2>Ваше замовлення</h2>
                        <div className={styles.receipt}>
                            <div className={styles.row}>
                                <div className={styles.item}>Товар</div>
                                <div className={styles.price}>Сума</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.item}>М'ясні джерки <strong>400г</strong></div>
                                <strong className={styles.price}>₴129</strong>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.item}>Всього</div>
                                <strong className={styles.price}>₴129</strong>
                            </div>
                        </div>
                    </form>

                    <form className={`${styles.buyerAddress} ${styles.placingForm__items}`}>
                        <h2>Адреса покупця</h2>
                        <input type="search" placeholder="Область"/>
                        <input type="search" placeholder="Місто"/>
                        <input type="search" placeholder="Відділення"/>
                    </form>

                    <form className={`${styles.paymentMethod} ${styles.placingForm__items}`}>
                        <h2>Спосіб оплати</h2>
                        <div className={styles.paymentMethod__item}>
                            <input type="checkbox" className={styles.paymentMethod__input} id="payment1" />
                            <label htmlFor="payment1">Оплата при отриманні</label>
                        </div>

                        <div className={styles.paymentMethod__item}>
                            <input type="checkbox" className={styles.paymentMethod__input} id="payment2" />
                            <label htmlFor="payment2">Оплата на карту (реквізити рахунку прийдуть вам y <b>Telegram</b>)</label>
                        </div>

                        <div className={styles.paymentMethod__item}>
                            <input type="checkbox" className={styles.paymentMethod__input} id="payment3" />
                            <label htmlFor="payment3">Оплата на карту <b>(50%)</b></label>
                        </div>


                        <div className={styles.paymentMethod__item}>
                            <input type="checkbox" className={styles.paymentMethod__input} id="payment4" />
                            <label htmlFor="payment4">Оплата криптовалютою (адреса гаманця прийде вам у <b>Telegram)</b></label>
                        </div>

                        <Link to="/OrderStatus" className={`${styles.btn} btn`}>Оформити замовлення</Link>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Placing;
