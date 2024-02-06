'use client'
import Registrar from "@/app/componentes/botones/registrar"
import style from "@/app/admin/admin.module.css"
export default function editInsumos(){
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Editar Insumo</a></div>
    </div>
    <div className="row justify-content-center">
    <img className={`${style.img_invent} col-3`} src="/expresso.jpeg" alt=""></img>
    </div>
    <div className="row my-3 justify-content-center">
        <div className="form col-5 py-4">
        <label className="texto_menu col-4">Código</label>
            <input type="number" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Nombre</label>
            <input type="text" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Cantidad</label>
            <input type="number" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Fecha Ingreso</label>
            <input type="date" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Fecha Vencimiento</label>
            <input type="date" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Costo</label>
            <input type="number" className="col-7 m-2 input_form" ></input>
            <div className="row text-center my-3">
            <div className=""><Registrar/></div><br></br>
        </div>
        </div>
    </div>
 </>)
}