'use client'

import { text } from "stream/consumers";
import Calculator from "../../../components/Calculator";


export default function Home() {
  return (
      <div style={{textAlign: 'center'}}>
        <Calculator/>
        <button onClick={() => console.log("Button clicked")}>Click me!</button>
        <p>Hi</p>
        
        {/* Add your content here */}
      </div>
  );
}