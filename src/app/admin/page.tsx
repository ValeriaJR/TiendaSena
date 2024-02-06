'use client'
import styles from "../admin/admin.module.css"
export default function InicioA(){
    return(
        <>
    <div className="row my-4">
        <div className="text-center"><a className={`${styles.text_nav_home}`}>Bienvenido</a></div>
    </div>
    <div className="container  justify-content-center">
        <div className="row">
            <div className={`${styles.list} col-3 ms-4`}></div>
            <div className={`${styles.list} col-4 ms-3`}></div>
            <div className={`${styles.list} col-4 ms-3`}></div>
        </div>
        <div className="row">
            <div className={`${styles.list_data} col-3 ms-4`}>
                <div className="row mt-2">Usuarios registrados: <b className="text-center">10</b> </div>
                <div className={`${styles.img_inicio} row `}>
                    <img className="col-4" src="/User_Circle.svg" alt=""></img>
                </div>
            </div>
            <div className={`${styles.list_data} col-4 ms-3`}>
            <div className="row mt-2">Facturas registradas: <b className="text-center">10</b></div>
                <div className={`${styles.img_inicio} row `}>
                <img className="col-3" src="/factura.svg" alt=""></img>
                </div>
            </div>
            <div className={`${styles.list_data} col-4 ms-3`}>
                <div className="row mt-2">Total: <b className="text-center">10</b></div>
                <div className={`${styles.img_inicio} row`}>
                <img className="col-3" src="/total.svg" alt=""></img>
                </div>
            </div>
        </div>
        <div className="col-8 text-center my-3 container">
        <div className={`${styles.subtit} row mt-4 ms-3`}>Proximos a vencer</div>
        <div className="texto_menu mx-2 my-1 row table">
            <div className="col-3">ID</div>
            <div className="col-3">Imagen</div>
            <div className="col-3">Nombre</div>
            <div className="col-3">F. vencimiento</div>
        </div>
        <div className="row mx-2 my-1 texto_drop">
            <div className="col-3">111</div>
            <div className="col-3"><img className="col-3" src="/carta.png"></img></div>
            <div className="col-3">xxxx</div>
            <div className="col-3">01/01/2023</div>
        </div>
        </div>
    </div>
        </>
    )
}