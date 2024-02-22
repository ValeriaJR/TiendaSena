'use client'
import Registrar from "@/app/componentes/botones/registrar";
import { useState, useEffect } from "react";
import axios from "axios";
import Adicionar from "@/app/componentes/botones/adicionar";
export default function PageFactura(){
    const [fecha, setFecha] = useState(Date);
    const [estado, setEstado] = useState(Boolean);
    const [cantidad, setCantidad] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [consumidor, setConsumidor] = useState("");
    const [producto, setProducto] = useState("");

    const add = ()=>{
        axios.post("http://localhost:3001/createFacturas",{
            fecha:fecha,    
            estado:estado,
            subtotal:subtotal,
            precio:precio,
            cantidad:cantidad,
            total:total,
            consumidor:consumidor,
            producto:producto,
        }).then(()=>{
            alert("Factura registrada");
        });
    }
    const [consumidoresList,setConsumidores] = useState([])
    useEffect(() =>{
      axios.get("http://localhost:3001/consumidores",).then((response)=>{
          setConsumidores(response.data);
      });
    }, [])
      console.log(consumidoresList)
      const [productosList,setProductoslist] = useState([])
      useEffect(() =>{
        axios.get("http://localhost:3001/productos",).then((response)=>{
            setProductoslist(response.data);
        });
      }, [])
        console.log(productosList)
  const [productos, setProductos] = useState([{ Producto: 0, Cantidad: 0, Subtotal: 0, Venta:0 }]);
  const agregarFila = () => {
    const nuevoProducto = { Producto: 0, Cantidad: 0, Subtotal: 0, Venta:0 };
    setProductos([...productos, nuevoProducto]);
  };  
    return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Registrar factura</a></div>
    </div>
    <div className="row justify-content-center">
        <div className="form col-5 py-4">
            <label className="texto_menu col-4">Consumidor</label>
            <select  onChange={(event) => { setConsumidor(event.target.value); }} className="col-7 m-2 input_form" >
            {consumidoresList.map((val,key)=>{
            return <> <option value={val.cedula}>{val.cedula}</option></>})
        }
            </select>
            <label className="texto_menu col-4">Fecha de factura</label>
            <input  onChange={(event) => { setFecha(event.target.value); }}type="date" className="col-7 m-2 input_form" ></input>
            <label className="texto_menu col-4">Estado</label>
            <select  onChange={(event) => { setEstado(Boolean(event.target.value)); }}className="col-7 m-2 input_form">
                <option>seleccciona el estado</option>
                <option value={1}>Activo</option>
                <option value={0}>Inactivo</option>    
                </select>
        <div className="row container  my-3 ">
            <div className="texto_menu text-center my-1 mx-3 row table">
                <div className="col-3 my-1 ">Producto</div>
                <div className="col-2 my-1 me-3">Cantidad</div>
                <div className="col-3 my-1 ">Precio/U</div>
                <div className="col-3 my-1">Subtotal</div>
            </div>
            {productos.map((producto, index) => (
                <div key={index} className="row my-1">
                <div className="row mx-4">
                <select onChange={(event) => { setProducto(event.target.value); }} className="col-3 texto_drop">
                {productosList.map((val,key)=>{
            return <><option value={val.codigo}>{val.nombre}</option></>})
        }
                </select>
               <input onChange={(event) => { setCantidad(parseInt(event.target.value)); }} type="number" className="col-3 texto_drop"></input>
                <input onChange={(event) => { setPrecio(parseInt(event.target.value)); }} className="col-3 texto_drop" type="number"></input>
                <input onChange={(event) => { setSubtotal(parseInt(event.target.value)); }} value={cantidad*precio} type="number" className="col-3 texto_drop"></input>
                </div>
            </div>
            ))}
            <div className="text-center mx-3 my-3 " onClick={agregarFila}><Adicionar/></div>
        </div>
        
            <label className="texto_menu col-4">Total</label>
            <input onChange={(event) => { setTotal(parseInt(event.target.value)); }} type="number" className="col-7 m-2 input_form" ></input>
            <div onClick={add} className="text-center my-3"><Registrar/></div>
        </div>
    </div>
    </>)
}