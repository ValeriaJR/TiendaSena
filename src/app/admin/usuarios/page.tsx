'use client'
import styles from "@/app/usuario/usuario.module.css"
import style from "@/app/admin/admin.module.css"
export default function usuarios(){
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
          <div className="col-4 col-md-2">Documento</div>
          <div className="col-4 col-md-2">Nombres</div>
          <div className="col-4 col-md-3">Apellidos</div>
          <div className="col-4 col-md-2">Correo</div>
          <div className="col-4 col-md-3">Tipo de usuario</div>
        </div>
        <div className="row mx-2 my-1 texto_drop">
          <div className="col-4 col-md-2">1112233</div>
          <div className="col-4 col-md-2">Susana</div>
          <div className="col-4 col-md-3">Amaya Trujillo</div>
          <div className="col-4 col-md-2">123@gmail.com</div>
          <div className="col-4 col-md-3">Auxiliar</div>
        </div>
    </div>
 </>)
}