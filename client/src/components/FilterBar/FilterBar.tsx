import "./FilterBar.css";

export const FilterBar = () => {
  return (
    <nav>
      <button className="button job-list">Empleos</button>
      <div className="line-division"></div>
      <button className="button filter-button">Fecha de publicación</button>
      <button className="button filter-button">Nivel de experiencia</button>
      <button className="button filter-button">Empresa</button>
      <button className="button filter-button">En remoto</button>
      <button className="button filter-button">Solicitud sencilla</button>
      <div className="line-division"></div>
      <button className="button filter-button">Todos los filtros</button>
    </nav>
  );
};
