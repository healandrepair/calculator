'use client'

import { text } from "stream/consumers";
import Calculator from "../../components/Calculator";
import "./AddBootstrap.js"


export default function Home() {
  return (
      <div style={{textAlign: 'center'}}>
        <header className="p-3 text-bg-dark">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Calculator</a></li>
          <li><a href="#" className="nav-link px-2 text-white">More</a></li>
        </ul>
        
      </div>
        </header>
        <Calculator/>
      </div>
  );
}