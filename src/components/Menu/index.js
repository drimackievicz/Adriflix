import React from 'react';
import Logo from '../../assets/img/adriflix.png';
import './Menu.css';

function Menu(){
    return (
        <nav className='Menu'>
            <a href='/'>
           <img  src={Logo} alt='AdriFlix' className='Logo'/>
            </a>
            <button href='/' className='ButtonLink' >
                Novo Vídeo
            </button>
                    
        </nav>
    );
}

export default Menu;