import styles from "../../usuario/usuario.module.css"
export default function Adicionar(){
    return(
    <button className={`${styles.ingresar} col-3 text-center p-1 `} type="submit"><span className={`${styles.text_form}`}>Adicionar</span></button>
    )
}
