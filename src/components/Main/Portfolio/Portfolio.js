import "./Portfolio.css";
import arrow from '../../../images/arrow.png';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__header">Портфолио</h2>
            <div className="portfolio__list">
                <a href="https://nail-khusainov.github.io/Hotel-Booking/" target="_blank" className="portfolio__element">
                    <h2 className="portfolio__element-title">Статичный сайт</h2>
                    <img className="portfolio__element-arrow" src={arrow} alt="arrow-sign" />
                </a>
                <a href="https://nail-khusainov.github.io/russian-travel/" target="_blank" className="portfolio__element">
                    <h2 className="portfolio__element-title">Адаптивный сайт</h2>
                    <img className="portfolio__element-arrow" src={arrow} alt="arrow-sign" />
                </a>
                <a href="https://nail-khusainov.github.io/mesto/" target="_blank" className="portfolio__element">
                    <h2 className="portfolio__element-title">Одностраничное приложение</h2>
                    <img className="portfolio__element-arrow" src={arrow} alt="arrow-sign" />
                </a>
            </div>
        </section >
    );
}
export default Portfolio;