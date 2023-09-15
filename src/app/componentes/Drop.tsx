'use client'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaRegUserCircle } from "react-icons/fa";
export default function Drop(){
  return (
    <>
    <div>
        <div className="text-center mt-5 pb-5 border-bottom">
            <FaRegUserCircle  style={{color: "#663300", fontSize: '80px'}}/>
        </div>
        <a className="btn " href="#" >
          <span className='texto_menu'>Inicio</span>
        </a>
      </div>
      <div className="dropdown border-top">
        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className='texto_menu'>Usuarios</span>
        </button>
          <ul className="dropdown-menu ">
            <li><a href="#" className='dropdown-item texto_drop'>Registrar Usuario</a></li>
            <li><a href="#" className='dropdown-item texto_drop'>Ver Usuarios</a></li>
          </ul>
      </div>
      <div className="dropdown border-top">
        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className='texto_menu'>Inventario</span>
        </button>
          <ul className="dropdown-menu ">
            <li><a href="#" className='dropdown-item texto_drop'>Inventario de Utensilios</a></li>
            <li><a href="#" className='dropdown-item texto_drop'>Inventario de Insumos</a></li>
          </ul>
      </div>

      <div className="dropdown border-top">
        <a className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className='texto_menu'>Facturación</span>
        </a>
          <div className="dropdown-menu">
            <a href="/admin/factura" className='dropdown-item texto_drop'>Registrar Facturas</a>
            <a href="/admin/vistaFactura" className='dropdown-item texto_drop'>Facturas</a>
          </div>
      </div>
      <div className="dropdown border-top">
        <a className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className='texto_menu'>Proveedores</span>
        </a>
          <div className="dropdown-menu">
            <a href="#" className='dropdown-item texto_drop'>Registro de Proveedores</a>
            <a href="#" className='dropdown-item texto_drop'>Proveedores</a>
          </div>
      </div>
      <div className="dropdown border-top">
        <a className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className='texto_menu'>Balances</span>
        </a>
          <div className="dropdown-menu">
            <a href="#" className='dropdown-item texto_drop'>Balance Diario</a>
            <a href="#" className='dropdown-item texto_drop'>Balance Mensual</a>
          </div>
      </div>
      <div className="dropdown border-top">
        <a className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className='texto_menu'>Consumidores</span>
        </a>
          <div className="dropdown-menu">
            <a href="#" className='dropdown-item texto_drop'>Registrar Consumidores</a>
            <a href="#" className='dropdown-item texto_drop'>Consumidores</a>
          </div>
      </div>
      <div className="dropdown border-top">
        <a className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className='texto_menu'>Carta</span>
        </a>
          <div className="dropdown-menu">
            <a href="#" className='dropdown-item texto_drop'>Registrar productos</a>
            <a href="#" className='dropdown-item texto_drop'>Carta</a>
          </div>
      </div>
      <div className="dropdown border-top">
        <a className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className='texto_menu'>Eventos</span>
        </a>
          <div className="dropdown-menu">
            <a href="/admin/evento" className='dropdown-item texto_drop'>Registrar Evento</a>
            <a href="/admin/vistaEvento" className='dropdown-item texto_drop'>Eventos Programados</a>
          </div>
      </div>
      
    
    </>
  );
};


