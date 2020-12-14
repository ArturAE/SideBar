import React, { useState } from 'react';/* importamos el useState */
import * as FaIcons from 'react-icons/fa';/* inportarmos los iconos, si el icono seleccionado empieza con Fa pertenecese a estos, pero sino, hay que importar los iconos de ese tipo,por eso el siguiente import */
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'; /* importamos el fichero en donde esta el array que creamos */
import './Navbar.css';
import { IconContext } from 'react-icons';/* icono context seria como un useContext, en donde  esto mismoestaria disponible en todos los compoennetes*/

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  /* nuestra funcion resive una arrow function la cual tendra como parametro !sidebar, inicialmente nuestro state
    esta como false pero con esto sera true, asi que con esto diriamos que se habra el menu cada que demos clic
  */
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        {/* el value serian los valores que pasamos, en este caso solo un color que modificario el color de los iconos */}
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
                {/* Link lo usamos para definir una navegacion declarativa y accesible alrededor de la app 
                    to es como para decir a donde dirigirse
                */}
                <Link to='#' className='menu-bars'>
                    {/* al instalar los iconos los importamos como FaIcons, asi que cada que queramos hacer una referencia a un iicono sera con FaIcons.(nombre del icono seleccionadp) */}
                    {/* este tendra una funcion, la cual mostrara el sidebar cuando se haga clic */}
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            {/* aqui mostraremos nuestras vistas, para esto haremos uso de useState, en caso de ser tru muestra el menu sino mantenlo como oculto*/}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                {/* creamos una lista desordenada */}
                {/* el onclick aqui hara que cuando se de clic en cualquiera de los iconos, ya sea la x o algun otro se cierre automaticamente el navbar */}
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        {/* aqui agregamos un icono que sera para cerrar el navbar */}
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {/* en este aparatdo recorreremos el array de objetos que creamos */}
                    {SidebarData.map((item, index) => {
                        /* esto es lo que retornamos, asi que va dentro de un return, si tuvieramos mas valores a retornar seria necesario hacer modificaciones al codigo */
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    </>
  );
}

export default Navbar;


/* en primer instancia hay que instalar react router con el siguiente comando
    npm install react-router-dom
    npm install react-icons  --para iconos

    hay que limpiar el proyecto y crearemos 2 carpetas dentro de src, components y pages
    pages seran las cosas que deseamos mostrar
    components pues nuestros componente, en este caso el navbar
*/