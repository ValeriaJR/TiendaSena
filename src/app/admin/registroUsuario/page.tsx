'use client'
import Registrar from "@/app/componentes/botones/registrar"
export default function registroUsuario(){
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Registrar Usuario</a></div>
    </div>
    <div className="row justify-content-center">
        <div className="form col-5 py-4">
            <label className="texto_menu col-4">Nombres</label>
            <input type="text" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Apellidos</label>
            <input type="text" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Correo electrónico</label>
            <input type="text" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Tipo de documento</label>
            <select className="col-7 m-2 input_form">
                <option>seleccciona el tipo</option>
                <option >Tarjeta de identidad</option>
                <option >Cedula</option>  
                <option >Cedula de extrangeria</option>
                <option >Registro civil</option>  
                </select>
            <label className="texto_menu col-4">Número de documento</label>
            <input type="number" className="col-7 m-2 input_form" ></input>
            <div className="row text-center my-3">
            <div className=""><Registrar/></div><br></br>
        </div>
        </div>
    </div>
 </>)
}