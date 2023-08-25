import Header from '../Header/Header';
import Promo from '../Main/Promo/Promo';
import Project from '../Main/Project/Project';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';
import Portfolio from '../Main/Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <main className="content">
      <Header theme={{ default: false }}/>
      <Promo />
      <Project />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Main;
