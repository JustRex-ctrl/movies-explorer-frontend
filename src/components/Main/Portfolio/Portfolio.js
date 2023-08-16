function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/JustRex-ctrl/russian-travel" target="_blank" rel="noreferrer">Статичный сайт</a>
          <a className="portfolio__link-arrow" href="https://github.com/JustRex-ctrl/russian-travel" target="_blank" rel="noreferrer"></a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/JustRex-ctrl/how-to-learn" target="_blank" rel="noreferrer">Адаптивный сайт</a>
          <a className="portfolio__link-arrow" href="https://github.com/JustRex-ctrl/how-to-learn" target="_blank" rel="noreferrer"></a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/JustRex-ctrl/mesto" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          <a className="portfolio__link-arrow" href="https://github.com/JustRex-ctrl/mesto" target="_blank" rel="noreferrer"></a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
