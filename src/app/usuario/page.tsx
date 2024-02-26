'use client'
import LayoutUs from "./layout"
import Inicio from "./inicio/page"
export default function PageUsuario(){
    return(<>
    <LayoutUs>{
        <Inicio></Inicio>
        }</LayoutUs>
    </>)
}