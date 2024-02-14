'use client'
import { useState } from "react";
import axios from "axios";
import Registrar from "@/app/componentes/botones/registrar";
export default function RegEvento(){

const [fecha, setFecha] = useState(Date);
const [hora_inicio, setHora_inicio] = useState("");
const [hora_fin, setHora_fin] = useState("");
const [imagen, setImagen] = useState("");
const [descripcion, setDescripcion] = useState("");
const [cupo, setCupo] = useState(0);

const add = ()=>{
    axios.post("http://localhost:3001/registrarEvento",{
        fecha:fecha,
        hora_inicio:hora_inicio,
        hora_fin:hora_fin,
        imagen:imagen,
        descripcion:descripcion,
        cupo:cupo,
    }).then(()=>{
        alert("Evento registrado");
    });
}
    return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Registrar Evento</a></div>
    </div>
    <div className="row justify-content-center">
        <div className="form col-5 py-4">
            <label className="texto_menu col-4">Fecha del evento</label>
            <input onChange={(event) => { setFecha(event.target.value); }}type="date" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Hora de inicio</label>
            <input onChange={(event) => { setHora_inicio(event.target.value); }}type="time" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Hora de fin</label>
            <input onChange={(event) => { setHora_fin(event.target.value); }}type="time" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Imagen del evento</label>
            <input onChange={(event) => { setImagen(event.target.value); }}type="file" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Descripción del Menú</label>
            <input onChange={(event) => { setDescripcion(event.target.value); }}type="textarea" className="col-7 m-2 input_form"></input>
            <label className="texto_menu col-4">Cupos disponibles</label>
            <input onChange={(event) => { setCupo(parseInt(event.target.value)); }}type="number" className="col-7 m-2 input_form"></input> 
            <div className="text-center my-3" onClick={add}><Registrar/></div>
        </div>
    </div>
    </>)
}