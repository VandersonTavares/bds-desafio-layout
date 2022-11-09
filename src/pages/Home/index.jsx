import { ReactComponent as ImgCar } from "../../assets/images/carro.svg";
import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-container-top">
          <div className="home-top-interior">
            <div>
              <ImgCar />
            </div>
            <div>
              <h5>O carro perfeito para você</h5>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
        </div>
        <div className="home-container-bottom">
          <button className="btn"><Link to="/catalogo">Ver Catalogo</Link></button>
          <p>Começe agora a navegar</p>
        </div>
      </div>
    </>
  );
}
export default Home;
