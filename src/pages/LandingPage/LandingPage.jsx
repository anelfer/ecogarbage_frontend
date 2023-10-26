import TypeIt from "typeit-react";
import {AnimationOnScroll} from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import Map from "../../components/Map/Map";

import Header from "../../components/Header/Header";

import img1 from "../../assets/imgs/453435.svg";
import img2 from "../../assets/imgs/34534.svg";
import img3 from "../../assets/imgs/03b3a8df3ed3929c5743ffa1c47f7464.png";
import img4 from "../../assets/imgs/e-waste.svg";
import img5 from "../../assets/imgs/plastic.svg";
import img6 from "../../assets/imgs/metal.svg";
import img7 from "../../assets/imgs/glass.svg";
import img8 from "../../assets/imgs/peper.png";
import img9 from "../../assets/imgs/organic.png";


export default function LandingPage() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="container">
                <div className="block-page">
                    <div className="block-text">
                        <div className="title">
                            <TypeIt
                                options={{
                                    strings: ["Найди Ближайший Пункт Переработки Мусора!"],
                                    speed: 80,
                                    waitUntilVisible: false,
                                    cursor: true
                                }}
                            />
                        </div>
                        <div className="description">Добро пожаловать на наш сайт, посвященный инновационным методам
                            переработки мусора!<br/><br/>Мы – команда энтузиастов, ставящая своей целью сделать наш мир
                            чище и
                            безопаснее.<br/><br/>Вместе мы исследуем и реализуем передовые технологии, чтобы сократить
                            объемы
                            отходов и минимизировать воздействие на окружающую среду.
                        </div>
                    </div>
                    <div className="block-img">
                        <img src={img1} alt="IMG"/>
                    </div>
                </div>
            </div>
            <div className="container block-secondory">
                <div className="block-page">
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true}>
                        <div className="block-text secondory">
                            <div className="title color-secondory">
                                Карта: Ваш путь к более чистому завтрашнему Дню!
                            </div>
                            <div className="description color-secondory">
                                На нашей интерактивной карте представлены точки для сдачи мусора, расположенные в вашем
                                городе и окрестностях.
                                <br/><br/>
                                Каждый маркер на карте – это возможность сделать шаг к сохранению природы и снижению
                                экологического следа. Используйте карту для поиска наиболее удобного для вас пункта
                                переработки отходов! Как Использовать Карту:
                                <br/><br/>
                                Обзор и Поиск: Просто перемещайтесь по карте или введите ваш адрес, чтобы найти
                                ближайшие пункты сдачи мусора.
                                <br/><br/>
                                Информация о Точках: Кликните на интересующий вас маркер, чтобы увидеть детальную
                                информацию о пункте: виды принимаемого мусора, часы работы и контакты.
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInRightBig" animateOnce={true}>
                        <div className="block-img secondory">
                            <img src={img2} alt="IMG"/>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
            <div className="container">
                <div className="block-page">
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true}>
                        <div className="block-text">
                            <div className="title">
                                Особенности Платформы:
                            </div>
                            <div className="description">
                                Широкая База Пунктов: Наши данные постоянно обновляются и включают в себя разнообразные
                                пункты переработки: от крупных станций до маленьких контейнеров.
                                <br/> <br/>
                                Полезные Советы: Узнайте, как правильно сортировать и упаковывать отходы для
                                максимального удобства и эффективности переработки.
                                <br/> <br/>
                                Сообщество ЭкоЛюбителей: Присоединяйтесь к нашему сообществу, обменивайтесь опытом,
                                задавайте вопросы и участвуйте в обсуждениях.
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInRightBig" animateOnce={true}>
                        <div className="block-img">
                            <img src={img3} alt="IMG"/>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
            <div className="container block-secondory">
                <div className="block-list__info">
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true}>
                        <div className="block-info">
                            <img src={img4} alt="E-Waste"/>
                            <div className="block-info__text">
                                <h1>E-Waste (Электронные отходы):</h1>
                                <span>
                                Что складывать: Старые сотовые телефоны, зарядные устройства, компьютерное оборудование, бытовая техника, батарейки и аккумуляторы.
                                <br/><br/>
                                Как складывать: Удалите все батареи и аккумуляторы из устройств.Убедитесь, что все данные удалены с электронных устройств. Помещайте мелкие элементы в коробку.
                            </span>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInRightBig" animateOnce={true}>
                        <div className="block-info block-info__reserve">
                            <img src={img5} alt="Plastic"/>
                            <div className="block-info__text">
                                <h1>Plastic (Пластик):</h1>
                                <span>
                                Что складывать: Пластиковые бутылки, контейнеры, пакеты, стаканчики, пленка.
                                <br/> <br/>
                                Как складывать: Промойте и высушите пластиковые изделия. Сжимайте бутылки и контейнеры для экономии места. Отсеките крышки от бутылок.
                            </span>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true}>
                        <div className="block-info">
                            <img src={img6} alt="Metal"/>
                            <div className="block-info__text">
                                <h1>Metal (Металл):</h1>
                                <span>
                                    Что складывать: Консервные банки, алюминиевые баночки, крышки, фольга.
                                    <br/> <br/>
                                    Как складывать: Промойте и высушите металлическую упаковку. Сожмите банки и фольгу, чтобы сэкономить место.
                                </span>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInRightBig" animateOnce={true}>
                        <div className="block-info block-info__reserve">
                            <img src={img7} alt="Glass"/>
                            <div className="block-info__text">
                                <h1>Glass (Стекло):</h1>
                                <span>
                                    Что складывать: Стеклянные бутылки, банки, контейнеры.
                                    <br/> <br/>
                                    Как складывать: Промойте и высушите стекло. Отделите крышки и кольца от банок и бутылок.
                                </span>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true}>
                        <div className="block-info">
                            <img src={img8} alt="Paper"/>
                            <div className="block-info__text">
                                <h1>Paper (Бумага):</h1>
                                <span>
                                    Что складывать: Газеты, журналы, коробки, конверты, офисная бумага.
                                    <br/> <br/>
                                    Как складывать: Сложите бумагу и картон. Удалите пленку и ленту из коробок. Не складывайте загрязненную или влажную бумагу.
                                </span>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInRightBig" animateOnce={true}>
                        <div className="block-info block-info__reserve">
                            <img src={img9} alt="Paper"/>
                            <div className="block-info__text">
                                <h1>Organic (Органические отходы):</h1>
                                <span>
                                    Что складывать: Овощные и фруктовые обрезки, чайные пакетики, кофейная гуща, яичные скорлупы.
                                    <br/> <br/>
                                    Как складывать: Помещайте органические отходы в биоразлагаемый пакет или контейнер. Избегайте складывания мяса, рыбы и молочных продуктов.
                                </span>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
            <Map />
        </div>
    );
}
