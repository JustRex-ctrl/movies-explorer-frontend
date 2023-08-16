import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter">
      <label htmlFor="checkbox" className="filter__checkbox-label">
        <p className="filter__text">Короткометражки</p>
        <input className="filter__checkbox" id="checkbox" type="checkbox" />
        <div className="filter__toggler-slider" />
      </label>
    </div>
  );
}

export default FilterCheckbox;
