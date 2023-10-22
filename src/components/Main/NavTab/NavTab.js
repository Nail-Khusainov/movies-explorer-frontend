import "./NavTab.css";

function NavTab() {
    return (
        <section className="nav">
            <nav className="nav__links">
                <a href="#aboutproject" className="nav__link">О проекте</a>
                <a href="#techs" className="nav__link">Технологии</a>
                <a href="#aboutme" className="nav__link">Студент</a>
            </nav>
        </section>
    );
}
export default NavTab;