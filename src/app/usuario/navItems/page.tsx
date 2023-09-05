'use client'
import React from "react"
import styles from "../usuario.module.css"
export default function NavUsuarioItems({name,url,isActive}:{name:string,url:string,isActive:boolean}){
    return(
        <li className={`${isActive? `${styles.item_active} ms-4` : `${styles.item_nav} ms-4`}`}>
             <a className={`${styles.texto}`} href={url}>{name}</a></li>
    )

}