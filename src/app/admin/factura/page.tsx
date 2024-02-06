'use client'
import Registrar from "@/app/componentes/botones/registrar";
import { useState, useEffect } from "react";
import axios from "axios";
import Adicionar from "@/app/componentes/botones/adicionar";
export default function PageFactura(){

  const [Consumidor, setConsumidor] = useState(0);
  const [Pago, setPago] = useState("");
   const [Fecha, setFecha] = useState(new Date().toISOString().substring(0, 10));
  const [Producto, setProducto] = useState(0);
  const [Cantidad, setCantidad] = useState(0);
  const [Subtotal, setSubtotal] = useState(0);
  const [Total, setTotal] = useState(0);
  const [Venta, setVenta] = useState(0);
  const [Bodega, setBodega] = useState(0);
  const [Estado, setEstado] = useState(1);
  const [productos, setProductos] = useState([{ Producto: 0, Cantidad: 0, Subtotal: 0, Venta:0 }]);
  const agregarFila = () => {
    const nuevoProducto = { Producto: 0, Cantidad: 0, Subtotal: 0, Venta:0 };
    setProductos([...productos, nuevoProducto]);
  };  
  const registrar = ()=>{
	const Subtotal = Cantidad * Venta;
    const Neto = vSumTotal;
    axios.post("http://localhost:3001/create",{
  Id_Cliente: Consumidor,
  Forma_Pago: Pago,
  Fecha: Fecha,
  Productos: productos,
  Cod_Producto: Producto,
  Cantidad: Cantidad,
  Subtotal: Cantidad * Venta,
  IVA: Subtotal,
  Neto: Neto,
  Precio_Venta: Venta,
  Estado: Estado,
  Id_Bodega: Bodega,
}).then(()=>{
      alert("Factura Registrada");
    })
  }
  const [vSumTotal, setVSumTotal] = useState(0);
  useEffect(() => {
     const handlesumar = () => {
       const sumar = productos.map((sub) => parseInt(sub.Subtotal.toString()))
         .reduce((previous, current) => {
           return previous + current;
         }, 0);
       setVSumTotal(sumar);
     };
     handlesumar();
   });
    return(<>
    <div className="row my-4">
        <div className="text_nav text-center"><a className="tittle">Registrar factura</a></div>
    </div>
    <div className="row justify-content-center">
        <div className="form col-5 py-4">
            <label className="texto_menu col-4">Consumidor</label>
            <input type="number" className="col-7 m-2 input_form" defaultValue={Consumidor}
            onChange={(event) => { setConsumidor(parseInt(event.target.value)); }}
            ></input>
            <label className="texto_menu col-4">Bodega</label>
            <input type="number" className="col-7 m-2 input_form" defaultValue={Bodega}
            onChange={(event) => { setBodega(parseInt(event.target.value)); }}
            ></input>
            <label className="texto_menu col-4">Fecha de factura</label>
            <input type="date" className="col-7 m-2 input_form" defaultValue={Fecha}
            onChange={(event) => { setFecha(event.target.value); }}
            ></input>
            <label className="texto_menu col-4">Forma de pago</label>
            <input type="text" className="col-7 m-2 input_form" defaultValue={Pago}
            onChange={(event) => { setPago(event.target.value); console.log(Pago)}}>
            </input>
            <label className="texto_menu col-4">Estado</label>
            <select className="col-7 m-2 input_form" value={Estado}
            onChange={(event) => { setEstado(parseInt(event.target.value)); }} >
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
                <input type="number" className="col-3 texto_drop" value={producto.Producto} 
                onChange={(event) => { setProducto(parseInt(event.target.value));
                    const nuevosProductos = [...productos];
                    nuevosProductos[index].Producto = parseInt(event.target.value);
                    setProductos(nuevosProductos); }}></input>
               <input type="number" className="col-3 texto_drop" value={producto.Cantidad}
                onChange={(event) => { setCantidad(parseInt(event.target.value)); 
                    const nuevosProductos = [...productos];
                    nuevosProductos[index].Cantidad = parseInt(event.target.value);
                    setProductos(nuevosProductos); }}></input>
                <input className="col-3 texto_drop" type="number" value={producto.Venta}
                onChange={(event) => { setVenta(parseInt(event.target.value));
                  const nuevosProductos = [...productos];
                    nuevosProductos[index].Venta = parseInt(event.target.value);
                    setProductos(nuevosProductos); }}></input>
                <input type="number" className="col-3 texto_drop" readOnly
                  value={producto.Subtotal = producto.Cantidad * producto.Venta}
                onChange={(event) => { setSubtotal(parseInt(event.target.value));
                    const nuevosProductos = [...productos];
                    nuevosProductos[index].Subtotal = parseInt(event.target.value);
                    setProductos(nuevosProductos); }}></input></div>
            </div>
            ))}
            <div className="text-center mx-3 my-3 " onClick={agregarFila}><Adicionar/></div>
        </div>
        
            <label className="texto_menu col-4">Total</label>
            <input type="number" className="col-7 m-2 input_form" value={vSumTotal}
            onChange={(event) => { setTotal(parseInt(event.target.value)); }}  readOnly
            ></input>
            <div className="text-center my-3" onClick={registrar}><Registrar/></div>
        </div>
    </div>
    </>)
}