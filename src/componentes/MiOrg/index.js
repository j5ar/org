
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //useState()
    //const [nombre,actulizarNombre] = useState("Johan") 
    //const [mostrar,actulizarMostrar]= useState(true)
    //const manejarClick =()=>{
    //    console.log("Mostrar/Ocultar elemento", !mostrar)
     //   actulizarMostrar(!mostrar)
   // }

    return <section className="orgSection">
        <h3 className="title">Mi Organizaón</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg