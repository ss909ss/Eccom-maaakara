import styles from './style.module.css'
import {Link} from "react-router-dom";
import { Path } from '../../Path';

function Contacts() {
    return (
        <div className="container">
            <section className={styles.contacts}>
                <h1>
                    Контакти
                </h1>
                <div className={styles.pageNavigation}>
                    <Link to={Path.home} className={styles.page}>Головна</Link>
                    <div className={styles.minus}>
                        —
                    </div>
                    <Link to="/ContactsPage" className={styles.page}>Контакти</Link>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96445.09244451221!2d30.53259311853064!3d50.444551519015434!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sua!4v1729352688213!5m2!1sru!2sua"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                <div className={styles.ourContacts}>
                    <div className={styles.ourContact}>
                        Телефон
                        <a href="#">
                            +380636278899
                        </a>
                    </div>
                    <b className={styles.ourContact}>
                        E-mail
                        <a href="#">
                            info@sitename.com
                        </a>
                    </b>
                    <div className={styles.ourContact}>
                        Адреса <br/>
                        <a target="_blank"
                           href="https://maps.app.goo.gl/TNG4TZ1xHf7x6mPt7">
                            м.Черкаси, вулиця Сумгаїтська
                        </a>
                    </div>
                </div>

                <div className={styles.writeToUs}>
                    <h2>Напишіть нам</h2>
                    <input type="text" placeholder="Ім'я"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="number" placeholder="Телефон"/>
                    <textarea placeholder="Повідомлення"/>
                    <button className={`${styles.btn} btn`}>Надіслати</button>
                </div>
            </section>
        </div>
    );
}

export default Contacts;
