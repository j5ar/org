import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
function App() {
  const [mostrarFormulario, actulizarMostrar] = useState(true)
  const [colaboradores,actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:true
  }
  ])

  const [equipos, actualizarEquipos]= useState([
    
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9",
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF",
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2",
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8",
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5",
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9",
    },
    {
      id: uuid(),
      titulo:"Inovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF",
    },
    
  ])
  //Ternario -->condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () =>{
    actulizarMostrar(!mostrarFormulario)
  }
  const registrarColaborador = (colaborador)=>{
    console.log("new",colaborador)
    actualizarColaboradores([...colaboradores, colaborador])

  }
  //Eliminar colaborador
  const eliminarColaborador =(id) =>{
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  //Actulizar color de equipo
  const actulizarColor= (color, id) =>{
    console.log("Actualizar: ", color, id)
    const equiposActulizados = equipos.map((equipo) => {
      if(equipo.id ===id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActulizados)
  }

  //LikE
  const like =(id) =>{
    console.log("like",id)
    const colaboradoresActulizados  = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    } )
    actualizarColaboradores(colaboradoresActulizados)
  }
  //Crear equipo
  const crearEquipo =(nuevoEquipo) =>{
    actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])

  }

  
  
  return (
    <div>
      <Header/>
      {mostrarFormulario  &&<Formulario 
      equipos={ equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      
      />
       }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      { 
        equipos.map( (equipo) => <Equipo 
          datos={equipo}
           key={equipo.titulo}
           colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
           eliminarColaborador={eliminarColaborador}
           actulizarColor={actulizarColor}
           like = {like}
          />
         )
      }
      <Footer/>
      
    </div>
  );
}

export default App;
