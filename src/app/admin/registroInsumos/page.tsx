'use client'
import Registrar from "@/app/componentes/botones/registrar"
export default function registroInsumos(){
 return(<>
   <div className="row my-4">
        <div className="col-12 text-center">
          <a className="tittle">Registrar Insumos</a>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5 col-xl-4 form py-4">
          <div className="form-group row">
            <label className="col-md-4 col-form-label">Código</label>
            <div className="col-md-8">
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-4 col-form-label">Nombre</label>
            <div className="col-md-8">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-4 col-form-label">Cantidad</label>
            <div className="col-md-8">
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-4 col-form-label">Imagen</label>
            <div className="col-md-8">
              <input type="file" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-4 col-form-label">Fecha Ingreso</label>
            <div className="col-md-8">
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-4 col-form-label">Fecha Vencimiento</label>
            <div className="col-md-8">
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-4 col-form-label">Costo</label>
            <div className="col-md-8">
              <input type="number" className="form-control" />
            </div>
          </div>
          <div className="row text-center my-3">
            <div className="col-12">
              <Registrar />
            </div>
          </div>
        </div>
      </div>
 </>)
}