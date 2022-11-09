import { ReactComponent as ImgCar2 } from "../../assets/images/carro2.svg";
import "./styles.css";

function Card() {
  return (
    <>
      <div className="container">
        <div className="container-img">
          <ImgCar2 />
        </div>
        <div className="box">
          <h3>Audi supra TT</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elitadipisicing
            elit.
          </p>
          <button className="btn custom-btn">Comprar</button>
        </div>
      </div>
    </>
  );
}
export default Card;
