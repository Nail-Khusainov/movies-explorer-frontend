import './MainPage.css';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';



function MainPage() {
    return (
        <div className="main-page">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default MainPage;