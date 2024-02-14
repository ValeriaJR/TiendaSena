'use client'
import styles from "@/app/usuario/usuario.module.css"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Usuarios(){
  const [usuariosList,setUsuarios] = useState([])
  useEffect(() =>{
    axios.get("http://localhost:3001/usuarios",).then((response)=>{
        setUsuarios(response.data);
    });
  }, [])
    console.log(usuariosList)
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Usuarios registrados</a></div>
    </div>
    <div className="row justify-content-center">
        <div className="col-sm-6 col-md-4 col-lg-3 text-center p-1">
          <button className={`${styles.ingresar} w-100`} type="submit">
            <a href="/admin/registroUsuario" className={`${styles.text_form}`}>
              Adicionar
            </a>
          </button>
          
        </div>
      </div>
      <div className="col-12 col-md-10 col-lg-8 text-center my-3 container">
        <div className="texto_menu mx-2 my-1 row table">
          <div className="col-3 ">Documento</div>
          <div className="col-3 ">Nombres</div>
          <div className="col-3 ">Apellidos</div>
          <div className="col-3 ">Correo</div>
          
        </div>
        <div className="row mx-2 my-1 texto_drop">
          {usuariosList.map((val,key)=>{
            return <>
          <div className="col-3 ">{val.cedula}</div>
          <div className="col-3 ">{val.nombre}</div>
          <div className="col-3 ">{val.apellido}</div>
          <div className="col-3 ">{val.correo}</div>
          </>})
        }
        </div>
    </div>
 </>)
}