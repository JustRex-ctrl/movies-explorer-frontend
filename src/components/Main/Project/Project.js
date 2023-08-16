function Project() {
  return (
    <section className="project" id="project">
      <h2 className="project__title">О проекте</h2>
      <ul className="project__list">
        <li className="project__element">
          <h3 className="project__header">Дипломный проект включал 5&nbsp;этапов</h3>
          <p className="project__text">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className="project__element">
          <h3 className="project__header">На выполнение диплома ушло 5&nbsp;недель</h3>
          <p className="project__text">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="project__time-line">
        <p className="project__time-line-body">1 неделя</p>
        <p className="project__time-line-body">4 недели</p>
        <p className="project__time-line-caption">Back-end</p>
        <p className="project__time-line-caption">Front-end</p>
      </div>
    </section>
  );
}

export default Project;
