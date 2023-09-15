'use client'
import styles from "../../usuario/usuario.module.css"
import Registrar from "@/app/componentes/botones/registrar";

export default function vistaFactura(){
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">facturas</a></div>
    </div>
    <div className="row text-center justify-content-center">
        <div className="col-6">
            <div className=""><Registrar/></div><br></br>
        </div>
        <div className="text-center">
        <button className={`${styles.ingresar} col-1 mx-3 my-2 text-center p-1 `} type="submit"><span className={`${styles.text_form}`}>Ingreso</span></button>
        <button className={`${styles.ingresar} col-1 mx-3 my-2 text-center p-1 `} type="submit"><span className={`${styles.text_form}`}>Egreso</span></button>
        <button className={`${styles.ingresar} col-1 mx-3 my-2 text-center p-1 `} type="submit"><span className={`${styles.text_form}`}>Perdida</span></button>
        </div>
        <div className="col-8 text-center my-3 container">
            <div className="texto_menu mx-2 my-1 row table">
                <div className="col-2 mx-2 my-1">Nro Factura</div>
                <div className="col-2 mx-2 my-1">Fecha</div>
                <div className="col-3 mx-2 my-1">Producto</div>
                <div className="col-1 mx-2 my-1">Cantidad</div>
                <div className="col-2 mx-2 my-1">Total</div>
            </div>
            <div className="row mx-2 my-1 ">
                <div className="col-2 mx-2 my-1 texto_drop">000</div>
                <div className="col-2 mx-2 my-1 texto_drop">2023/04/12</div>
                <div className="col-3 mx-2 my-1 texto_drop">Café Americano</div>
                <div className="col-1 mx-3 my-1 texto_drop">3</div>
                <div className="col-2 mx-2 my-1 texto_drop">$12.000</div>
            </div>
        </div>
    </div>
 </>)
}