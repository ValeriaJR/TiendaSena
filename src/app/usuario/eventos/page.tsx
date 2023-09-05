'use client'
import styles from "../usuario.module.css"
const backgroundStylesU: React.CSSProperties = {
    backgroundImage: `url('/userp.svg/')`, // Reemplaza con la ruta de tu imagen
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
};
export default function Eventos(){
    return(
        <>
        <div className="container-fluid mt-5" style={backgroundStylesU}>
            <div className="row">
            <div className="col-12 text-center mt-5 mb-3 ">
                <span className={`${styles.text_p_form} col-10 text-center ms-4`}>Eventos</span>
            </div>
            </div>
            <div className={`${styles.form_carta} row m-3 p-0`}>
                <div className="col-4 container-fluid g-0 ">
                    <img className="col-8 px-0 rounded-start" src="/IMAGE.png" alt=""></img>
                </div>
                <div className="col-8">
                    <span className={`${styles.text_carta} col-8`}>Tarde de Menú</span><br></br>
                    <span className={`${styles.text_form} col-10`}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum odit corrupti at nemo est facere voluptatem dolorem ipsa quibusdam? Quas praesentium optio harum deserunt ad aliquam aperiam eveniet eum?</span>
                        <div className="col-3 my-1">
                            <span className={`${styles.text_eventos} col-10`}>2023/07/23</span>
                        </div>
                        <div className={`${styles.menu} col-3 my-1 text-center`}>
                            <a className={`${styles.a_carta}`} href="/carta"><span className={`${styles.text_form} col-10`}>Ver Menú</span></a>
                        </div> 
                </div>
            </div>    
        </div>
        </>
    )
}