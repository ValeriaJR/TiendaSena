'use client'
import Registrar from "@/app/componentes/botones/registrar"
import { useState } from "react";
import axios from "axios";
export default function RegistroUtensilios(){

const [nombre, setNombre] = useState("");
const [cantidad, setCantidad] = useState(0);
const [imagen, setImagen] = useState("");

const add = ()=>{
    axios.post("http://localhost:3001/createUtensilios",{    
        nombre:nombre,
        cantidad:cantidad,
        imagen:imagen
    }).then(()=>{
        alert("Utensilio registrado");
    });
}
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Registrar Utensilios</a></div>
    </div>
    <div className="row justify-content-center">
        <div className="form col-5 py-4">
            <label className="texto_menu col-4">Nombre</label>
            <input onChange={(event) => { setNombre(event.target.value); }} type="text" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Cantidad</label>
            <input onChange={(event) => { setCantidad(parseInt(event.target.value)); }}type="number" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">imagen</label>
            <input onChange={(event) => { setImagen(event.target.value); }}type="file" className="col-7 m-2 input_form" ></input>
            <div className="row text-center my-3">
            <div className="" onClick={add}><Registrar/></div><br></br>
        </div>
        </div>
    </div>
 </>)
}