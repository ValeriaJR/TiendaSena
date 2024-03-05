'use client'
import styles from "@/app/admin/admin.module.css"
import { useEffect, useState } from "react";
import axios from "axios";
export default function BalanceMensual(){
    const [MensualList, setMensual] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3001/mensual").then((response) => {
        setMensual(response.data);
        console.log(response.data);
      });
    }, []);
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Balance Mensual</a></div>
    </div>
    <div className="col-8 text-center my-3 container">
    <div className="texto_menu mx-2 my-1 row table">
            <div className="col-2">Nro Factura</div>
            <div className="col-2">Fecha</div>
            <div className="col-3">Producto</div>
            <div className="col-2">Cantidad</div>
            <div className="col-3">Total</div>
        </div>
        {MensualList.map((val, key) => {
          return <>
        <div className="row mx-2 my-1 texto_drop">
        <div className="col-2">{val.nro}</div>
            <div className="col-2">{val.fecha}</div>
            <div className="col-3">{val.producto}</div>
            <div className="col-2">{val.cantidad}</div>
            <div className="col-3">{val.total}</div>
        </div>
        </>
        })}
    </div>
    <div className="container justify-content-center my-3">
    <div className="row">
            <div className={`${styles.list} col-3 ms-4`}></div>
            <div className={`${styles.list} col-4 ms-3`}></div>
            <div className={`${styles.list} col-4 ms-3`}></div>
        </div>
        <div className="row">
            <div className={`${styles.list_data} col-3 ms-4`}>
                <div className="row mt-2">Ingresos: <b className="text-center">10</b> </div>
                <div className={`${styles.img_inicio} row `}>
                    <img className="col-4" src="/incremento.svg" alt=""></img>
                </div>
            </div>
            <div className={`${styles.list_data} col-4 ms-3`}>
            <div className="row mt-2">Egresos: <b className="text-center">10</b></div>
                <div className={`${styles.img_inicio} row `}>
                <img className="col-3" src="/decremento.svg" alt=""></img>
                </div>
            </div>
            <div className={`${styles.list_data} col-4 ms-3`}>
                <div className="row mt-2">Perdidas: <b className="text-center">10</b></div>
                <div className={`${styles.img_inicio} row`}>
                <img className="col-3" src="/cash.svg" alt=""></img>
                </div>
            </div>
        </div>
        </div>
 </>)
}