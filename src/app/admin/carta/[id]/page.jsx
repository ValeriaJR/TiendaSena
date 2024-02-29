'use client'
import { useParams, useRouter, } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Registrar from "@/app/componentes/botones/registrar"

const EditarProducto = () => {
    const [producto, setProducto] = useState({})
    const router = useParams();
    const route = useRouter();
    // console.log(router);
    const { id } = router

    useEffect(() => {
        axios.get(`http://localhost:3001/producto/${id}`,).then((response) => {
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
        axios.put(`http://localhost:3001/updateProductos`, producto
        ).then(() => {
            alert("Producto editado correctamente");
        }).then(() => {
            route.push("/admin/carta")
        })
    }
    return (
        <>
            <div className="row my-4">
                <div className="text_nav text-center"><a className="tittle">Agregar Producto a la Carta</a></div>
            </div>
            <div className="row justify-content-center">
                <form onSubmit={e => handleSubmit(e)} className="form col-5 py-4">
                    <label className="texto_menu col-4">Imagen</label>
                    <input onChange={e => handleChange(e)} name="imagen" type="file" className="col-7 m-2 input_form" ></input>
                    <label className="texto_menu col-4">Nombre</label>
                    <input onChange={e => handleChange(e)} value={producto?.nombre} name='nombre' type="text" className="col-7 m-2 input_form" ></input>
                    <label className="texto_menu col-4">Descripción</label>
                    <input onChange={e => handleChange(e)} value={producto?.descripcion} name='descripcion' type="textarea" className="col-7 m-2 input_form" ></input>
                    <label className="texto_menu col-4">Precio</label>
                    <input onChange={e => handleChange(e)} value={producto?.precio} name='precio' type="number" className="col-7 m-2 input_form" ></input>
                    <label className="texto_menu col-4">Cantidad</label>
                    <input onChange={e => handleChange(e)} value={producto?.cantidad} name='cantidad' type="number" className="col-7 m-2 input_form" ></input>
                    <div className="row text-center my-3">
                        <div className=""><Registrar /></div><br></br>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditarProducto