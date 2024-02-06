'use client'
import styles from "@/app/usuario/usuario.module.css"
export default function provedores(){
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Proveedores Registrados</a></div>
    </div>
    <div className="row justify-content-center">
    <button className={`${styles.ingresar} col-2 text-center align-items-center p-1 `} type="submit"><a href="/admin/registroProveedor" className={`${styles.text_form}`}>Adicionar</a></button>      
    </div>
    <div className="col-8 text-center my-3 container">
    <div className="texto_menu mx-2 my-1 row table">
            <div className="col-2">Documento</div>
            <div className="col-2">Nombres</div>
            <div className="col-3">Apellidos</div>
            <div className="col-2">Direccion</div>
            <div className="col-3">Telefono</div>
        </div>
        <div className="row mx-2 my-1 texto_drop">
        <div className="col-2">1112233</div>
            <div className="col-2">Susana</div>
            <div className="col-3">Amaya </div>
            <div className="col-2 ps-3">La Ceja</div>
            <div className="col-3 ps-3">2233335566</div>
        </div>
    </div>
 </>)
}