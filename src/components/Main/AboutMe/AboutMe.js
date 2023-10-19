import "./AboutMe.css";
import aboutmePic from '../../../images/aboutme-pic.jpg'

function AboutMe() {
    return (
        <section className="aboutme" id="aboutme">
            <h2 className="aboutme__header">Студент</h2>
            <div className="aboutme__info-block">
                <div className="aboutme__info">
                    <div className="">
                        <h2 className="aboutme__info-title">Виталий</h2>
                        <h3 className="aboutme__info-subtitle">Фронтенд-разработчик, 32 года</h3>
                        <p className="aboutme__info-text">
                            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                            начал заниматься фриланс-заказами и ушёл с постоянной работы.
                        </p>
                        <a href="#" className="aboutme__link" target="_blank">Github</a>
                    </div>
                </div>
                <img className="aboutme__photo" alt="мое фото" src={aboutmePic}></img>
            </div>
        </section>
    );
}
export default AboutMe;