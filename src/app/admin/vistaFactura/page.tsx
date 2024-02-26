'use client'
import styles from "../../usuario/usuario.module.css"
import Registrar from "@/app/componentes/botones/registrar";
import { useEffect, useState } from "react";
import axios from "axios";
export default function VistaFactura(){
    const [facturasList,setFacturas] = useState([])
  useEffect(() =>{
    axios.get("http://localhost:3001/facturas",).then((response)=>{
        setFacturas(response.data);
    });
  }, [])
    console.log(facturasList)
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">facturas</a></div>
    </div>
    <div className="row text-center justify-content-center">
        <div className="col-6">
            <div className=""><Registrar/></div><br></br>
        </div>
        <div className="col-8 text-center my-3 container">
            <div className="texto_menu mx-2 my-1 row table">
                <div className="col-1 mx-2 my-1">Numero</div>
                <div className="col-3 mx-2 my-1">Fecha</div>
                <div className="col-3 mx-2 my-1">Producto</div>
                <div className="col-1 mx-2 my-1">Cantidad</div>
                <div className="col-2 mx-2 my-1">Total</div>
            </div>
        {facturasList.map((val,key)=>{
            return <>
            <div className="row mx-2 my-1 ">
                <div className="col-1 mx-2 my-1 texto_drop">{val.nro}</div>
                <div className="col-3 mx-2 my-1 texto_drop">{val.fecha}</div>
                <div className="col-3 mx-2 my-1 texto_drop">{val.producto}</div>
                <div className="col-1 mx-3 my-1 texto_drop">{val.cantidad}</div>
                <div className="col-2 mx-2 my-1 texto_drop">{val.total}</div>
            </div>
            </>})
        }
        </div>
    </div>
 </>)
}