'use client'
import NavUsuarioItems from "../navItems/page"
import styles from "../usuario.module.css"
const navU = [
    {name: "Inicio", url: "../usuario/inicio", id: 1},
    {name: "Eventos", url: "../usuario/eventos", id: 2},
    {name: "Menú", url: "../usuario/carta", id: 3},
    {name: "Iniciar sesión", url: "../usuario/sesion", id: 4},
];
export default function NavUsuario({name}:{name:string}){
    return(
        <>
        <div className="container-fluid position-absolute top-0 start-0 mb-1">
        <div className={`${styles.nav_usuario} row`}>
                <div className="col-1"><img src="/Layer1000.svg" alt="logo"></img></div>
                <div className={`${styles.text_nav} col-4`}>La Tienda del Café</div>
                <div className={`${styles.nav} col-7 text-center my-3`}>
                {
                    navU.map((nav) =>
                    <NavUsuarioItems key={crypto.randomUUID()}name={nav.name} url={nav.url} isActive={nav.name == name}/>
                    )
                }
                </div>
        </div>
        </div>
        </>
    )
}