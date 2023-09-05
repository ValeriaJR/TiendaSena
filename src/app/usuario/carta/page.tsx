"use client";
import styles from "../usuario.module.css";
const backgroundStylesU: React.CSSProperties = {
  backgroundImage: `url('/userp.svg/')`, // Reemplaza con la ruta de tu imagen
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};
export default function Menu() {
  return (
    <>
      <div className="container-fluid mt-5" style={backgroundStylesU}>
        <div className="row">
          <div className="col-12 text-center mt-5">
            <span className={`${styles.text_p_form} col-10 text-center  ms-4`}>
              Café
            </span>
          </div>
          <div className="col-12 text-center ms-3">
            <button
              type="button"
              className={`${styles.ingresar} py-1 px-2 mt-2 mb-5 mx-3 col-auto`}
            >
              <a href="" className={`${styles.text_form}`}>
                CAFÉ
              </a>
            </button>
            <button
              type="button"
              className={`${styles.ingresar} py-1 px-2 mt-2 mb-5 mx-3 col-auto`}
            >
              <a href="" className={`${styles.text_form}`}>
                PANADERIA Y REPOSTERIA
              </a>
            </button>
            <button
              type="button"
              className={`${styles.ingresar} py-1 px-2 mt-2 mb-5 mx-3 col-auto `}
            >
              <a href="" className={`${styles.text_form}`}>
                COCTELERIA
              </a>
            </button>
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
