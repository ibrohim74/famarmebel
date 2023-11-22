import React, {useState} from 'react';
import Nav from "../component/nav";
import '../assets/css/home.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../component/footer";
const IndexHome = () => {
    return (
        <div>
            <Nav/>
            <section className="call-buton"><a className="cc-calto-action-ripple" href="tel:+998991234567">
                <img  src={require('../assets/img/icons8-telephone-45.png')} alt=""/>
            </a>
            </section>
            <header id={'home'}>
                <div className="header-opacity"></div>
                <div className="header-content">
                    <div className="logo">
                        <h1>Famarmebel</h1>
                        <p>Мы воплотим ваши мечты в реальность</p>
                    </div>
                </div>
            </header>

            <section className={'home-s2 container'} id={'about'}>
                <div className="s2-box">
                    <div className="s2-item">
                        <div className="s2-left">
                            <h1>15 лет на рынке</h1>
                            <p>За это время накоплен большой опыт и установленные прочные связи с лучшими
                                производителями мебели в Узбекистане..</p>
                            <a href="#">Подробнее</a>
                        </div>
                        <div className="s2-right">
                            <img src={require('../assets/img/pngegg (2).png')} alt=""/>
                        </div>
                    </div>
                    <div className="s2-item">
                        <div className="s2-left order-s2">
                            <img src={require('../assets/img/pngegg (1).png')} alt=""/>
                        </div>
                        <div className="s2-right">
                            <h1>Гарантия качества</h1>
                            <p>Работаем только с проверенными временем фабриками и продаем только оригинальную продукцию.
                                Вся мебель сертифицирована и имеет официальную гарантию производителя
                                18 месяцев.</p>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>

                    <div className="s2-item">
                        <div className="s2-left">
                            <h1>100 000 + довольных клиентов</h1>
                            <p>За 15 лет работы мы произвели и поставили мебель более чем 100 000 клиентов, которые
                                по достоинству оценили качество наших услуг и изделий.</p>
                            <a href="#">Подробнее</a>
                        </div>
                        <div className="s2-right">
                            <img src={require('../assets/img/kravat.png')} alt=""/>
                        </div>
                    </div>
                    <div className="s2-item">
                        <div className="s2-left order-s2">
                            <img src={require('../assets/img/gostiniy-removebg-preview.png')} alt=""/>
                        </div>
                        <div className="s2-right">
                            <h1>Более 7000 моделей
                            </h1>
                            <p>Безграничный выбор мебели - комплектация, размеры и цвета на заказ В каталоге вы найдете огромное количество вариантов на любой вкус и достаток.
                                А возможность выбирать цвета, комплектацию, размеры и фурнитуру, делает выбор по истине безграничным.</p>
                            <a href="#">Подробнее</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="s1" id={'catalog'}>
                <div className="container">
                    <h1 className="s1-h1-txt">Наши работы</h1>
                    <div className="s1-box">
                        <a href="/portfolio">
                            <div className="s1-item-opacity"></div>
                            <div className="s1-item">
                                <div className="s1-item-content">
                                    <h1>КУХОННАЯ МЕБЕЛЬ</h1>
                                </div>
                            </div>
                        </a>
                        <a href="/portfolio">
                            <div className="s1-item-opacity"></div>
                            <div className="s1-item">
                                <div className="s1-item-content">
                                    <h1>СПАЛЬНАЯ МЕБЕЛЬ</h1>
                                </div>
                            </div>
                        </a>
                        <a href="/portfolio">
                            <div className="s1-item-opacity"></div>
                            <div className="s1-item">
                                <div className="s1-item-content">
                                    <h1>ГОСТИНАЯ МЕБЕЛЬ</h1>
                                </div>
                            </div>
                        </a>
                        <a href="/portfolio">
                            <div className="s1-item-opacity"></div>
                            <div className="s1-item">
                                <div className="s1-item-content">
                                    <h1>ОФИСНАЯ МЕБЕЛЬ</h1>
                                </div>
                            </div>
                        </a>
                        <a href="/portfolio">
                            <div className="s1-item-opacity"></div>
                            <div className="s1-item">
                                <div className="s1-item-content">
                                    <h1>ДЕТСКАЯ МЕБЕЛЬ</h1>
                                </div>
                            </div>
                        </a>
                        <a href="/portfolio">
                            <div className="s1-item-opacity"></div>
                            <div className="s1-item">
                                <div className="s1-item-content">
                                    <h1>
                                        ГАРДЕРОБНАЯ МЕБЕЛЬ
                                    </h1>
                                </div>
                            </div>
                        </a>
                        <a href="/portfolio">
                            <div className="s1-item-opacity"></div>
                            <div className="s1-item">
                                <div className="s1-item-content">
                                    <h1>
                                        ПРИХОЖАЯ МЕБЕЛЬ
                                    </h1>
                                </div>
                            </div>
                        </a>
                        <a href="/portfolio">
                            <div className="s1-item-opacity"></div>
                            <div className="s1-item">
                                <div className="s1-item-content">
                                    <h1>
                                        МЯГКАЯ МЕБЕЛЬ
                                    </h1>
                                </div>
                            </div>
                        </a>
                       
                    </div>
                </div>
            </section>
                <Footer/>
        </div>
    );
};

export default IndexHome;