'use client'
import styles from "@/app/usuario/usuario.module.css"
import style from "@/app/admin/admin.module.css"
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Carta() {
    const [productosList, setProductos] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/productos",).then((response) => {
            setProductos(response.data);
            console.log(response.data)
        });
    }, [])

    const eliminar = (codigo) => {
        axios.delete(`http://localhost:3001/deleteProductos/${codigo}`, {
        }).then(() => {
            alert("Producto eliminado");
        }).then(() => {
            location.reload()
        })

    }

    return (<>
        <div className="row my-4">
            <div className="text_nav text-center"><a className="tittle">Carta</a></div>
        </div>
        <div className="row justify-content-center">
            <button className={`${styles.ingresar} col-2 text-center align-items-center p-1 `} type="submit"><a href="/admin/registroCarta" className={`${styles.text_form}`}>Adicionar</a></button>
        </div>
        <div className="row pt-2 mx-3">
            {productosList.map((val, key) => {
                return <>
                    <div className={`${style.carta} col-5 mt-2 mx-2`}>
                        <div key={key}></div>
                        <div className="col-12 text-center"><b>{val.nombre}</b></div>
                        <div className={`${styles.img_inicio} col-12 text-center`}>{val.imagen}</div>
                        <div className="col-12">{val.descripcion}</div>
                        <div className="col-12 text-center"><b>Precio </b>{val.precio}</div>
                        <div className="col-12 text-center"><b>Cantidad </b>{val.cantidad}</div>
                        <div className="col-12 justify-content-center">
                            <Link href={`/admin/carta/${val.codigo}`} className={`${styles.text_form}`}>
                                <button className={`${styles.ingresar} col-5 text-center align-items-center m-3 p-1 `}
                                    type="submit">Editar</button>
                            </Link>
                            <button className={`${styles.ingresar} col-5 text-center align-items-center p-1 `} onClick={() => {
                                eliminar(val.codigo);
                            }} type="submit"><a className={`${styles.text_form}`}>Dar de baja</a></button>
                        </div>
                    </div>
                </>
            })
            }
        </div>
    </>)
}