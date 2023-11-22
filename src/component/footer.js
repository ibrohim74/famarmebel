import React from 'react';
import '../assets/css/footer.css'
import {SendOutline} from "react-ionicons";
const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-content pt-5 pb-1">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50" id="tutroil">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Ariza Qoldirish</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Maʼlumotlaringizni qoldiring va bizning operatorlarimiz siz bilan Yaqin orada
                                            bog'lanadi</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="telegram.php" method="POST">
                                            <input type="text" placeholder="Ismingiz" name="name"/>
                                                <input
                                                    type="tel"
                                                    placeholder="+998991231213"
                                                    maxLength="13"
                                                    minLength="9"
                                                    name="tel"
                                                />
                                                    <button type="submit">
                                                        <SendOutline

                                                            height="100%"
                                                            width="100%"
                                                        />
                                                    </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-cta pt-5 ">
                                <div className="row">
                                    <div className="col-xl-4 col-md-4 mb-30">
                                        <div className="single-cta">
                                            <ion-icon name="location-outline" style={{fontsize:'40px'}}></ion-icon>
                                            <div className="cta-text">
                                                <h4>Manzil</h4>
                                                <span>
                                                Toshkent viloyati, Bo'stonliq tumani, Xumson qishlog'i
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-4 mb-30">
                                        <div className="single-cta">
                                            <ion-icon name="call-outline"></ion-icon>
                                            <div className="cta-text">
                                                <h4>Telefon Raqami</h4>
                                                <span>
                                                <a href="tel:+998900541404">+998 90 054 14 04</a>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-4 mb-30">
                                        <div className="single-cta">
                                            <ion-icon name="mail-outline"></ion-icon>
                                            <div className="cta-text">
                                                <h4>Email</h4>
                                                <span>
                                                <a href="mailto:office@xumsonsanatoriya.uz">office@xumsonsanatoriya.uz</a>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11203.175910207476!2d69.93014121738283!3d41.693799399999975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38af161c8b9c534d%3A0x37589e740c8dc3bc!2z0YXRg9C80YHQvtC9INGB0LDQvdCw0YLQvtGA0LjQuQ!5e1!3m2!1sru!2s!4v1681505293894!5m2!1sru!2s"
                                        width="100%"
                                        height="300px"
                                        style={{border:0}}
                                        allowFullScreen=""

                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="/">
                                            <img
                                                src={require('../assets/img/famar_logo2_white.png')}
                                                className="img-fluid"
                                                alt="logo"
                                                width="100%"
                                            />
                                        </a>
                                    </div>
                                    <div className="footer-social-icon">
                                        <ul className="social_icon">
                                            <li>
                                                <a href="https://instagram.com/xumsonsanatoriysi">
                                                    <ion-icon name="logo-instagram"></ion-icon>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://t.me/Xumsonsanatoriyasi">
                                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/xumsonsanatoriysi">
                                                    <ion-icon name="logo-facebook"></ion-icon>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;