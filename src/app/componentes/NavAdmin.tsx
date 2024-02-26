'use client'
import { FaRightFromBracket } from "react-icons/fa6";
export default function NavAdmin(){
    return(
        <>
        
        <div className="row nav_admin">
                <div className="col-1 py-1 ps-5"><img src="/Layer1000.svg" alt="logo"></img></div>
                <div className="text_nav_admin col-4 col-md-6 d-none d-sm-block pt-2">La Tienda del Café</div>
                <div className="nav col-7 col-md 5 text-center pt-3 pe-5" >
                    <a href="/usuario/sesion"><FaRightFromBracket style={{color: "#cc3366", fontSize: '30px'}}   /></a>  
                </div>
        </div>
        
        </>
    )
}