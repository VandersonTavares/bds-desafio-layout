import Card from "../../components/Card";
import './styles.css';

function Catalogo() {
  return (
    <>
      <div className="custom-container">
        <div className="search-container">
          <input className="custom-input" type="text" name="busca" id="busca" placeholder="Digite sua busca" />
          <button className="btn botao">Buscar</button>
        </div>
        <div className="custom-row row g-0">
          <div className="col-sm-6 mt-3 col-lg-4">
            <Card />
          </div>
          <div className="col-sm-6 mt-3 col-lg-4">
            <Card />
          </div>
          <div className="col-sm-6 mt-3 col-lg-4">
            <Card />
          </div>
          <div className="col-sm-6 mt-3 col-lg-4">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
export default Catalogo;
