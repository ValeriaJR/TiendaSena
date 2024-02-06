'use client'
import Registrar from "@/app/componentes/botones/registrar"
export default function registroCarta(){
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Agregar Producto a la Carta</a></div>
    </div>
    <div className="row justify-content-center">
        <div className="form col-5 py-4">
            <label className="texto_menu col-4">Imagen</label>
            <input type="file" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Nombre</label>
            <input type="text" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Descripción</label>
            <input type="textarea" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Tipo</label>
            <select className="col-7 m-2 input_form">
                <option>seleccciona el tipo</option>
                <option >Cafe</option>
                <option >Panaderia/Reposteria</option>  
                <option >Coctel</option>  
                </select>
            <label className="texto_menu col-4">Precio</label>
            <input type="number" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Cantidad</label>
            <input type="number" className="col-7 m-2 input_form" ></input>
            <div className="row text-center my-3">
            <div className=""><Registrar/></div><br></br>
        </div>
        </div>
    </div>
 </>)
}