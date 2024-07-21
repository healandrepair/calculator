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
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
        </header>
        <Calculator/>
        <button onClick={() => console.log("Button clicked")}>Click me!</button>
        <p>Calculate Please!</p>
        
        {/* Add your content here */}
      </div>
  );
}