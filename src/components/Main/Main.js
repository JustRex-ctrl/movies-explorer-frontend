import Promo from '../Main/Promo/Promo';
import Project from '../Main/Project/Project';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';
import Portfolio from '../Main/Portfolio/Portfolio';

function Main() {
  return (
    <main className="content">
      <Promo />
      <Project />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
