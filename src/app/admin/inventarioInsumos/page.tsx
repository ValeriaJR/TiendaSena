'use client'
import styles from "@/app/usuario/usuario.module.css"
import style from "@/app/admin/admin.module.css"
import axios from "axios";
import { useEffect, useState } from "react";
export default function Insumos(){
  const [insumosList,setInsumos] = useState([])
  useEffect(() =>{
    axios.get("http://localhost:3001/insumos",).then((response)=>{
        setInsumos(response.data);
    });
  }, [])
    console.log(insumosList)
    const eliminar = (codigo)=>{
      axios.delete(`http://localhost:3001/deleteInsumos/${codigo}`,{    
      }).then(()=>{
          alert("Insumo eliminado");
      }).then(() => {
          location.reload()
      })

  }
 return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Inventario de Insumos</a></div>
    </div>
    <div className="row justify-content-center">
        <div className="col-sm-6 col-md-4 col-lg-3 text-center p-1">
          <button className={`${styles.ingresar} w-100`} type="submit">
            <a href="/admin/registroInsumos" className={`${styles.text_form}`}>
              Adicionar
            </a>
          </button>
        </div>
      </div>
      <div className="container justify-content-center">
      {insumosList.map((val,key)=>{
            return <>
        <div className="row my-2">
          <div className="col-sm-6 col-md-4 col-lg-2">{val.imagen}
            <img className={`${style.img_invent} w-100`} src="/expresso.jpeg" alt=""/>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-6">
            <span className={`${style.tittle_small}`}>Codigo: </span>
            <span className={`${style.venc_txt}`}>{val.codigo}</span>
            <br />
            <span className={`${style.tittle_small}`}>Nombre: </span>
            <span className={`${style.venc_txt}`}>{val.nombre}</span>
            <br />
            <span className={`${style.tittle_small}`}>Fecha de Ingreso: </span>
            <span className={`${style.venc_txt}`}>{val.f_ingreso}</span>
            <br />
            <span className={`${style.tittle_small}`}>Fecha de Vencimiento: </span>
            <span className={`${style.venc_txt}`}>{val.f_vencimiento}</span>
            <br />
            <span className={`${style.tittle_small}`}>Cantidad: </span>
            <span className={`${style.venc_txt}`}>{val.cantidad}</span>
            <br />
            <span className={`${style.tittle_small}`}>Costo: </span>
            <span className={`${style.venc_txt}`}>{val.costo}</span>
            <br />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <button className={`${style.edit} w-100 text-center align-items-center p-1 `} type="submit">
              <a href="/admin/inventarioInsumos/editInsumos" className={`${styles.text_form}`}>Editar</a>
            </button>
            <br />
            <button className={`${style.edit} w-100 my-2 text-center align-items-center p-1 `}onClick={()=>{
                eliminar(val.codigo);
            }} type="submit">
              <a href="#" className={`${styles.text_form}`}>Dar de baja</a>
            </button>
          </div>
        </div>
        </>})
        }
    </div>
</>
 )
}