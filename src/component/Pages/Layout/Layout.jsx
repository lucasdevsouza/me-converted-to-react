import'./style.css'

import { Outlet } from 'react-router-dom';
import {CustomLink} from '../../Props/CustomLink'
import { useState } from 'react';
function Layout () {
    const [storage] = useState([
       <>
          Rápido/<strong>Lento</strong>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            id="fast-forward"
            data-name="Flat Color"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-color"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                id="primary"
                d="M21.55,11.17l-9-6a1,1,0,0,0-1,0A1,1,0,0,0,11,6v4.13l-7.45-5a1,1,0,0,0-1,0A1,1,0,0,0,2,6V18a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05l7.45-5V18a1,1,0,0,0,.53.88,1,1,0,0,0,1-.05l9-6a1,1,0,0,0,0-1.66Z"
                style={{ fill: '#c026d3' }}
              ></path>
            </g>
          </svg>
          </>
       ,
      ]);
    return (
      <header>

      <div>
        <nav>
          <ul>
          <li>   {storage.map((item, index) => (
              <CustomLink key={index}>{item}</CustomLink>
            ))} </li> 
          </ul>
          <ul>
          <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
           
          <li>
              <CustomLink to="/price">Preço</CustomLink>
            </li>
            <li>
              <CustomLink to="/contato">Contato</CustomLink>
            </li>
          </ul>
        </nav>
        <Outlet/>
      </div>
      </header>

    );
  }
  export {Layout}