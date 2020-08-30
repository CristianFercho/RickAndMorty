import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './Components/Formulario';
import ListadoEspecies from './Components/ListadoEspecie';
import Especie from './Components/Especie';
       


function App() {

  

  //state de la app
  const [ busqueda, guardarBusqueda] = useState('');
  const [ especie, guardarEspecies] = useState([]) ;
  const [ paginaactual, guardarPaginaActual ] = useState(1);
  const [ totalpaginas, guardarTotalPaginas] = useState(1);
  //CREAR LISTADO DE ESPECIES 
  // const[especies, guardarEspecies] = useState([
  //   {id: 1, name: "Rick Sanchez", status: "Alive", species: "Human", type: "", gender: "Male",},
  //   {id: 2, name: "gds bbbb", status: "Alive", species: "Human", type: "", gender: "Male",},
  //   {id: 3, name: "ggssd sdsss", status: "Alive", species: "Human", type: "", gender: "Male",}
  // ]);
  const[especiesn, guardarEspeciesNombre] = useState([])


    useEffect(() => {
    const consultarAPI = async () =>{

      // if(busqueda === '' ){}
      
      const url = `https://rickandmortyapi.com/api/character/?name=${busqueda}&page=${paginaactual}`;
      const respuesta = await fetch(url)
      const resultado = await respuesta.json();
      guardarEspecies(resultado.results);

      //Calcular el total de páginas
      const calcularTotalPainas = Math.ceil(Number(671)/20);
      guardarTotalPaginas(calcularTotalPainas);

      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth' })

      
    }
    consultarAPI();
  }, [busqueda, paginaactual])

    // definir la página anterior
    const paginaAnterior = () => {
      const nuevaPaginaActual = paginaactual - 1;
  
      if(nuevaPaginaActual === 0 ) return;
  
      guardarPaginaActual(nuevaPaginaActual);
    }
  
    // definir la pagina siguiente
    const paginaSiguiente = () => {
      const nuevaPaginaActual = paginaactual + 1;
  
      if(nuevaPaginaActual > totalpaginas ) return;
  
      guardarPaginaActual(nuevaPaginaActual);
    }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="Lead text-center">Rick and Morty</p>
        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        <ListadoEspecies
          especie = {especie}
        />

          { (paginaactual === 1) ? null : (
            <button 
                type="button"
                className="bbtn btn-info mr-1"
                onClick={paginaAnterior}
            >&laquo; Anterior </button>
          ) }

          { (paginaactual === totalpaginas) ? null : (
            <button 
              type="button"
              className="bbtn btn-info"
              onClick={paginaSiguiente}
            >Siguiente &raquo;</button>
          ) }

      </div>
    </div>
  );
}

export default App;
