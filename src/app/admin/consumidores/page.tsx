'use client'
import styles from "@/app/usuario/usuario.module.css"
import style from "@/app/admin/admin.module.css"
export default function consumidores(){
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
            <div className="col-3">Tipo</div>
            <div className="col-3">ID/NIT</div>
            <div className="col-3">Telefono</div>
        </div>
        <div className="row mx-2 my-1 texto_drop">
            <div className="col-3">Susana</div>
            <div className="col-3">Persona</div>
            <div className="col-3">11223344</div>
            <div className="col-3">3124443434</div>
        </div>
    </div>
 </>)
}