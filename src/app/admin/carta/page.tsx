'use client'
import styles from "@/app/usuario/usuario.module.css"
import style from "@/app/admin/admin.module.css"
export default function carta(){
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Carta</a></div>
    </div>
    <div className="row justify-content-center">
    <button className={`${styles.ingresar} col-2 text-center align-items-center p-1 `} type="submit"><a href="/admin/registroCarta" className={`${styles.text_form}`}>Adicionar</a></button>      
    </div>
   <div className={`${style.input_carta} col-6 mx-3 my-1 align-items-center`}><input type="search" placeholder="buscar"></input></div>      
    <div className="row pt-2 mx-3">
        <div className={`${style.carta} col-5 mt-2`}>
            <div className="col-12 text-center"><b>Expresso</b></div>
            <div className={`${styles.img_inicio} col-12 text-center`}>
                    <img  src="/expresso.jpeg" alt=""></img>
            </div>
            <div className="col-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illo incidunt adipisci rerum, fugit nulla iure harum magnam saepe placeat reiciendis possimus repudiandae sequi ad. Maiores voluptate odit animi incidunt.</div>
            <div className="col-12 text-center"><b>Precio</b></div>
        <div className="col-12 justify-content-center">
            <button className={`${styles.ingresar} col-5 text-center align-items-center m-3 p-1 `} type="submit"><a href="/admin/registroCarta" className={`${styles.text_form}`}>Editar</a></button>
            <button className={`${styles.ingresar} col-5 text-center align-items-center p-1 `} type="submit"><a href="/admin/registroCarta" className={`${styles.text_form}`}>Dar de baja</a></button>      
        </div>
        </div>
        
    </div>
 </>)
}