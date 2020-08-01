import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/adriflix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/adriana-mackievicz-44565a34npx">
        <img src={Logo} alt="AdriFlixx" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
