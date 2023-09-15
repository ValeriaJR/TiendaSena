import styles from "../../usuario/usuario.module.css"
export default function Registrar(){
    return(
    <button className={`${styles.ingresar} col-4 text-center p-1 `} type="submit"><span className={`${styles.text_form}`}>Registrar</span></button>
    )
}
