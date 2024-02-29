'use client'
import { useParams, useRouter, } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Registrar from "@/app/componentes/botones/registrar"
import style from "@/app/admin/admin.module.css"
export default function editUtensilios(){
    const [producto, setProducto] = useState({})
    const router = useParams();
    const route = useRouter();
    // console.log(router);
    const { id } = router

    useEffect(() => {
        axios.get(`http://localhost:3001/utensilio/${id}`,).then((response) => {
            const product = response.data
            setProducto(product)
            console.log(producto)
            console.log(product)
        });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProducto((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
        console.log(producto);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3001/updateUtensilios`, producto
        ).then(() => {
            alert("Producto editado correctamente");
        }).then(() => {
            route.push("/admin/inventarioUtensilios")
        })
    }
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Editar Utensilio</a></div>
    </div>
    <div className="row justify-content-center">
    <img className={`${style.img_invent} col-3`} src="/cuchara.png" alt=""></img>
    </div>
    <div className="row my-3 justify-content-center">
        <form className="form col-5 py-4" onSubmit={e => handleSubmit(e)}>
            <label className="texto_menu col-4" >Nombre</label>
            <input type="text" className="col-7 m-2 input_form" onChange={e => handleChange(e)} name='nombre' value={producto.nombre}></input>
            <label className="texto_menu col-4">Cantidad</label>
            <input type="number" className="col-7 m-2 input_form" onChange={e => handleChange(e)} name='cantidad' value={producto.cantidad}></input>
            <div className="row text-center my-3">
            <div className=""><Registrar/></div><br></br>
        </div>
        </form>
    </div>
 </>)
}