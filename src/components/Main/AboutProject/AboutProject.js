import "./AboutProject.css";

function AboutProject() {
    return (
        <section className="aboutproject" id="aboutproject">
            <h2 className="aboutproject__header">О проекте</h2>
            <div className="aboutproject__info">
                <div className="aboutproject__info-column">
                    <h2 className="aboutproject__info-header">Дипломный проект включал 5 этапов</h2>
                    <p className="aboutproject__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutproject__info-column">
                    <h2 className="aboutproject__info-header">На выполнение диплома ушло 5 недель</h2>
                    <p className="aboutproject__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="aboutproject__scale">
                <div className="aboutproject__scale-backend">
                    <h2 className="aboutproject__scale-title">1 неделя</h2>
                    <p className="aboutproject__scale-caption">Back-end</p>
                </div>
                <div className="aboutproject__scale-frontend">
                    <h2 className="aboutproject__scale-title">4 недели</h2>
                    <p className="aboutproject__scale-caption">Front-end</p>
                </div>
            </div>
        </section>
    );
}
export default AboutProject;