import React from 'react'
import './Nav.css';
import { Link } from "react-router-dom";


export default function Nav() {
  return (
    <div class="nav-outer">
        <div class="logo">
            <h1>
                CeyhunStore
            </h1>

        </div>

        <div class="menu">
          <ul>
          <li><Link to="/">Anasayfa</Link></li>
          <li><Link to="/hesabim">Hesabim</Link></li>
            <li> <Link to="/giris">Giriş Yap</Link></li>
          </ul>


           

        </div>
    </div>
  )
}
