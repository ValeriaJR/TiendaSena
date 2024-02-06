'use client'
import styles from "@/app/usuario/usuario.module.css"
import style from "@/app/admin/admin.module.css"
export default function utensilios(){
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Inventario de utensilios</a></div>
    </div>
    <div className="row justify-content-center">
    <button className={`${styles.ingresar} col-2 text-center align-items-center p-1 `} type="submit"><a href="/admin/registroUtensilios" className={`${styles.text_form}`}>Adicionar</a></button>      
    </div>
    <div className="container justify-content-center">
        <div className="row my-2">
            <div className="col-2">
            <img className={`${style.img_invent} col-10`} src="/cuchara.png" alt=""></img>
            </div>
            <div className="col-6">
                <span className={`${style.tittle_small}`}>Codigo: </span>
                <span className={`${style.venc_txt}`}>111</span><br></br>
                <span className={`${style.tittle_small}`}>Nombre: </span>
                <span className={`${style.venc_txt}`}>Cuchara</span><br></br>
                <span className={`${style.tittle_small}`}>Cantidad disponible: </span>
                <span className={`${style.venc_txt}`}>11</span><br></br>
            </div>
            <div className="col-3">
            <button className={`${style.edit} col-8 text-center align-items-center p-1 `} type="submit"><a href="/admin/inventarioUtensilios/editUtensilios" className={`${styles.text_form}`}>Editar</a></button><br></br>
            <button className={`${style.edit} col-8 my-2 text-center align-items-center p-1 `} type="submit"><a href="#" className={`${styles.text_form}`}>Dar de baja</a></button>
            </div>

        </div>
    </div>
</>
 )
}