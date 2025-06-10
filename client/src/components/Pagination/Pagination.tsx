import "./Pagination.css";

export const Pagination = () => {
  return (
    <div className="pagination">
      <ul className="pages">
        <li className="pagination--font">1</li>
        <li className="pagination--font">2</li>
        <li className="pagination--font">3</li>
        <li className="pagination--font">...</li>
      </ul>
      <button className="pagination--font next-button">Siguiente</button>
    </div>
  );
};
