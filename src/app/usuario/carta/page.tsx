"use client";
import styles from "../usuario.module.css";
const backgroundStylesU: React.CSSProperties = {
  backgroundImage: `url('/userp.svg/')`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};
export default function Menu() {
  return (
    <>
      <div className="container-fluid " style={backgroundStylesU}>
        <div className="row">
          <div className="col-12 text-center mt-5">
            <span className={`${styles.text_p_form} col-10 text-center  ms-4`}>
              Carta
            </span>
          </div>
        </div>
        <div className="row">
          <div className={`${styles.form_carta} row col-3 mx-5 p-0`}>
            <div className="col-4 g-0">
              <img className="col-12 px-0" src="/carta.png" alt=""></img>
            </div>
            <div className="col-5">
              <span className={`${styles.text_carta} col-8`}>Affogato</span>
              <br></br>
              <span className={`${styles.text_form} col-10`}>
                {" "}
                Lorem ipsum dolor
              </span>
            </div>
            <div className="col-3">
              <span className={`${styles.text_precio} col-10`}>2.200</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
