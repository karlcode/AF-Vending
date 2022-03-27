import React from "react"
import './index.css'; // Tell webpack that Button.js uses these styles


export default function Home() {

  return <div className="container">
    <input min={0} max={99} className="input" type="tel" maxLength={2}/>
    <div className="grid">
      <div className="number">7</div>
      <div className="number">8</div>
      <div className="number">9</div>
      <div className="number">4</div>
      <div className="number">5</div>
      <div className="number">6</div>
      <div className="number">1</div>
      <div className="number">2</div>
      <div className="number">3</div>
    </div>
  </div>
}
