function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/JustRex-ctrl/russian-travel" target="_blank" rel="noreferrer">
            <p className="portfolio__text">Статичный сайт</p>
            <div className="portfolio__link-arrow"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/JustRex-ctrl/how-to-learn" target="_blank" rel="noreferrer">
            <p className="portfolio__text">Адаптивный сайт</p>
            <div className="portfolio__link-arrow"></div>
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/JustRex-ctrl/mesto" target="_blank" rel="noreferrer">
            <p className="portfolio__text">Одностраничное приложение</p>
            <div className="portfolio__link-arrow"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
