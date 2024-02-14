'use client'
import styles from "@/app/usuario/usuario.module.css"
import axios from "axios";
import { useEffect, useState } from "react";
export default function Consumidores(){
    const [consumidoresList,setConsumidores] = useState([])
  useEffect(() =>{
    axios.get("http://localhost:3001/consumidores",).then((response)=>{
        setConsumidores(response.data);
    });
  }, [])
    console.log(consumidoresList)
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Consumidores Registrados</a></div>
    </div>
    <div className="row justify-content-center">
    <button className={`${styles.ingresar} col-2 text-center align-items-center p-1 `} type="submit"><a href="/admin/registroConsumidor" className={`${styles.text_form}`}>Adicionar</a></button>      
    </div>
    <div className="col-8 text-center my-3 container">
    <div className="texto_menu mx-2 my-1 row table">
            <div className="col-3">nombre</div>
            <div className="col-3">apellido</div>
            <div className="col-3">ID/NIT</div>
            <div className="col-3">Telefono</div>
        </div>
        <div className="row mx-2 my-1 texto_drop">
        {consumidoresList.map((val,key)=>{
            return <>
            <div className="col-3">{val.nombre}</div>
            <div className="col-3">{val.apellido}</div>
            <div className="col-3">{val.cedula}</div>
            <div className="col-3">{val.telefono}</div>
            </>})
        }
        </div>
    </div>
 </>)
}