import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="logo"></div>
        <input type="text" />
        <input type="text" />
        <button className="search-button">Buscar</button>
      </div>
    </header>
  );
};
