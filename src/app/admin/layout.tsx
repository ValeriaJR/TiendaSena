'use client'
import Drop from "../componentes/Drop";
import Main from "../componentes/Main";
import NavAdmin from "../componentes/NavAdmin";
import Footer from "../componentes/footer/page";


export default function  LayoutAdmin({children}:{children:React.ReactNode}){
    return(
        <>
        <NavAdmin/>
        <div className="row">
            <div className="col-2 back_menu">
                <Drop/>
            </div>
            <div className="col-10">
            <Main>{children}</Main>
            <Footer/>
            </div>
        </div>
        </>
    )
}