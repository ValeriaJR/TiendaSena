'use client'
import styles from "../usuario.module.css"
const backgroundStyles: React.CSSProperties = {
    backgroundImage: `url('/IMAGE.png/')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
};
export default function PageInicio(){
    return(
        <>
        <div className="container-fluid" style={backgroundStyles}>
            <div className="row mt-5 ">
                <div className={`${styles.form} col-3 text-center justify-content-center mt-5`}>
                    <div className={`${styles.text_p_form} col-10 text-center mt-5 ms-4`}>Bienvenidos</div><br></br>
                    <input type="text" className={`${styles.input_form} col-9 mb-3 py-1`} placeholder= "Email"></input><br></br>
                    <input type="text" className={`${styles.input_form} col-9 my-3 py-1`} placeholder="Usuario"></input><br></br>
                    <button type="submit" className={`${styles.ingresar} py-1 px-4 mt-3 mb-5`}><span className={`${styles.text_form}`}>INGRESAR</span></button>
                </div>
            </div>
        </div>
        </>
    )
}