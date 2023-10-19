import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <nav className="footer__nav">
                <p className="footer__nav-year">© 2023</p>
                <ul className="footer__nav-list">
                    {[
                        { text: 'Яндекс.Практикум', url: 'https://practicum.yandex.ru/' },
                        { text: 'Github', url: 'https://github.com/' },
                        // { text: 'LinkedIn', url: 'https://www.linkedin.com/' },
                    ].map((item, index) => (
                        <li key={index} className="footer__nav-element">
                            <a
                                className="footer__nav-link"
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>

            </nav>
        </footer>
    );
}

export default Footer;