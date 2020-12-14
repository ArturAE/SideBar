/* en este archivo se hace el menu del navbar */
import React from 'react';
/* se importan los iconos a usar */
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
/* se crea un array de objetos, el cual contiene nuestro menu y este lo listaremos en Navbar.js */
export const SidebarData = [
  {
    title: 'Home',/* se da un titulo o como se guste llamarlo */
    path: '/', /* se agrega la ruta, en este caso sera la pagina a la que va a redireccionar */
    icon: <AiIcons.AiFillHome />,/* se agrega el icono */
    cName: 'nav-text'/* y cName seria el className pasandole el estilo que queremos darle */
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];