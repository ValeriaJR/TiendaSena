'use client'
import styles from "../usuario.module.css"
import axios from "axios";
import { useEffect, useState } from "react";
const backgroundStylesU: React.CSSProperties = {
    backgroundImage: `url('/userp.svg/')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
};
export default function Eventos(){
    const [eventosList,setEventos] = useState([])
  useEffect(() =>{
    axios.get("http://localhost:3001/eventos",).then((response)=>{
        setEventos(response.data);
    });
  }, [])
    console.log(eventosList)
    return(
        <>
        <div className="container-fluid " style={backgroundStylesU}>
            <div className="row">
            <div className="col-12 text-center mt-5 mb-3 ">
                <span className={`${styles.text_p_form} col-10 text-center ms-4`}>Eventos</span>
            </div>
            </div>
            {eventosList.map((val,key)=>{
            return <>
            <div className={`${styles.form_carta} row m-3 p-0`}>
                <div className="col-4 container-fluid g-0 ">{val.imagen}
                    <img className="col-8 px-0 rounded-start" src="/IMAGE.png" alt=""></img>
                </div>
                <div className="col-8">
                    <span className={`${styles.text_carta} col-8`}>{val.hora_inicio}-{val.hora_fin}</span><br></br>
                    <span className={`${styles.text_form} col-10`}>{val.descripcion}</span>
                        <div className="col-3 my-1">
                            <span className={`${styles.text_eventos} col-10`}>{val.fecha}<br></br>Cupos: {val.cupo}</span>
                        </div>
                    
                </div>
            </div>
            </>})
        }    
        </div>
        </>
    )
}