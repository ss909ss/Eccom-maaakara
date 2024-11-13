
import styles from "./style.module.css";
import {Link} from "react-router-dom";
import checkoutImg from "../../images/checkoutTrue.svg"
import { Path } from '../../Path';

const Status = () => {
    return (
        <div className="container">
            <section className={styles.statusOrder}>
                <h1>
                    Статус замовлення
                </h1>

                <div className={styles.pageNavigation}>
                    <Link to={Path.home} className={styles.page}>Головна</Link>
                    <div className={styles.minus}>
                        —
                    </div>
                    <Link to="/" className={styles.page}>
                        Оформлення <span>замовлення</span> 
                    </Link>
                    <div className={styles.minus}>
                        —
                    </div>
                    <Link to="/OrderStatus" className={styles.page}>Статус</Link>
                </div>

                <div className={`${styles.columnAdaptive} flex`}>
                    <div className={styles.adaptiveWrapper}>
                        <img src={checkoutImg}
                             alt=""
                             className={styles.checkoutImg}/>


                        <div className={styles.successText}>
                            <div className={styles.item}>
                                Замовлення успішно оформлено
                            </div>

                            <div>
                                Ми зв'яжемося з вами найближчим часом
                            </div>
                        </div>
                    </div>

                    <Link to="/" className={`${styles.btn} btn`}>
                        Перейти на головну
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Status;