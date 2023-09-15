'use client'

import Registrar from "@/app/componentes/botones/registrar";
export default function RegEvento(){
    return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Registrar Evento</a></div>
    </div>
    <div className="row justify-content-center">
        <div className="form col-5 py-4">
            <label className="texto_menu col-4">Fecha del evento</label>
            <input type="date" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Hora de inicio</label>
            <input type="time" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Hora de fin</label>
            <input type="time" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Imagen del evento</label>
            <input type="file" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Descripción del Menú</label>
            <input type="textarea" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Cupos disponibles</label>
            <input type="number" className="col-7 m-2 input_form"></input> 
            <div className="text-center my-3"><Registrar/></div>
        </div>
    </div>
    </>)
}