'use client'
import Registrar from "@/app/componentes/botones/registrar";
import { useState, useEffect } from "react";
import axios from "axios";
import Adicionar from "@/app/componentes/botones/adicionar";
export default function PageFactura(){
  const [productos, setProductos] = useState([{ Producto: 0, Cantidad: 0, Subtotal: 0, Venta:0 }]);
  const agregarFila = () => {
    const nuevoProducto = { Producto: 0, Cantidad: 0, Subtotal: 0, Venta:0 };
    setProductos([...productos, nuevoProducto]);
  };  
    return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Registrar factura</a></div>
    </div>
    <div className="row justify-content-center">
        <div className="form col-5 py-4">
            <label className="texto_menu col-4">Consumidor</label>
            <input type="number" className="col-7 m-2 input_form" ></input>
            
            <label className="texto_menu col-4">Fecha de factura</label>
            <input type="date" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Forma de pago</label>
            <input type="text" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Estado</label>
            <select className="col-7 m-2 input_form">
                <option>seleccciona el estado</option>
                <option value={1}>Activo</option>
                <option value={0}>Inactivo</option>    
                </select>
        <div className="row container  my-3 ">
            <div className="texto_menu text-center my-1 mx-3 row table">
                <div className="col-3 my-1 ">Producto</div>
                <div className="col-2 my-1 me-3">Cantidad</div>
                <div className="col-3 my-1 ">Precio/U</div>
                <div className="col-3 my-1">Subtotal</div>
            </div>
            {productos.map((producto, index) => (
                <div key={index} className="row my-1">
                <div className="row mx-4">
                <input type="number" className="col-3 texto_drop"></input>
               <input type="number" className="col-3 texto_drop"></input>
                <input className="col-3 texto_drop" type="number"></input>
                <input type="number" className="col-3 texto_drop" readOnly></input>
                </div>
            </div>
            ))}
            <div className="text-center mx-3 my-3 " onClick={agregarFila}><Adicionar/></div>
        </div>
        
            <label className="texto_menu col-4">Total</label>
            <input type="number" className="col-7 m-2 input_form"  readOnly></input>
            <div className="text-center my-3"><Registrar/></div>
        </div>
    </div>
    </>)
}