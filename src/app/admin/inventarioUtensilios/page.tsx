'use client'
import styles from "@/app/usuario/usuario.module.css"
import style from "@/app/admin/admin.module.css"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Utensilios(){
  const [utensiliosList,setUtensilios] = useState([])
  useEffect(() =>{
    axios.get("http://localhost:3001/utensilios",).then((response)=>{
        setUtensilios(response.data);
    });
  }, [])
    console.log(utensiliosList)
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Inventario de utensilios</a></div>
    </div>
    <div className="row justify-content-center">
    <div className="col-sm-6 col-md-4 col-lg-3 text-center p-1">
        <button className={`${styles.ingresar}  w-100`} type="submit">
          <a href="/admin/registroUtensilios" className={`${styles.text_form}`}>Adicionar</a>
        </button>
    </div>
    </div>

      <div className="container">
      {utensiliosList.map((val,key)=>{
            return <>
        <div className="row my-2">
          <div className="col-sm-6 col-md-4 col-lg-2">{val.imagen}
            <img className={`${style.img_invent} w-100`} src="/cuchara.png" alt="" />
          </div>
          <div className="col-sm-12 col-md-8 col-lg-6">
            <span className={`${style.tittle_small}`}>Codigo: </span>
            <span className={`${style.venc_txt}`}>{val.codigo}</span>
            <br />
            <span className={`${style.tittle_small}`}>Nombre: </span>
            <span className={`${style.venc_txt}`}>{val.nombre}</span>
            <br />
            <span className={`${style.tittle_small}`}>Cantidad disponible: </span>
            <span className={`${style.venc_txt}`}>{val.cantidad}</span>
            <br />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <button className={`${style.edit} w-100 text-center align-items-center p-1`} type="submit">
              <a href="/admin/inventarioUtensilios/editUtensilios" className={`${styles.text_form}`}>Editar</a>
            </button>
            <br />
            <button className={`${style.edit} w-100 my-2 text-center align-items-center p-1 `} type="submit">
              <a href="#" className={`${styles.text_form}`}>Dar de baja</a>
            </button>
          </div>
        </div>
        </>})
        }
      </div>
</>
 )
}