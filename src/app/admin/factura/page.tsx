'use client'
import Registrar from "@/app/componentes/botones/registrar";

export default function PageFactura(){
    return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Registrar factura</a></div>
    </div>
    <div className="row justify-content-center">
        <div className="form col-5 py-4">
            <label className="texto_menu col-4">Consumidor</label>
            <input type="text" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Fecha de factura</label>
            <input type="text" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Producto a facturar</label>
            <input type="text" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Cantidad</label>
            <input type="text" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Tipo de factura</label>
            <input type="text" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Subtotal</label>
            <input type="text" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Total</label>
            <input type="text" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Estado</label>
            <select className="col-7 m-2 input_form">
                <option>Activo</option>
                <option>Inactivo</option>    
            </select> 
            <div className="text-center my-3"><Registrar/></div>
        </div>
    </div>
    </>)
}