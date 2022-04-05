import React from 'react'
import phones from "../pics/Phone3.jpg"
import head from "../pics/Head3.jpg"
import drive from "../pics/Pendrive3.jpg"
import {Link} from "react-router-dom"
function Home() {
  return (
    <div className='product'>
    <div className='firstrow'>

    <div className='card'>
    <h2>Smart Phones</h2>
    <img src={phones} alt=''/>
    <p>We sell quarlity smart phones at affordable price</p>
    <button> <Link to ="/products"></Link>View phones</button>
    </div>

    <div className='card'>
    <h2>HeadPhones</h2>
    <img src={head} alt=''/>
    <p>We sell quarlity smart phones at affordable price</p>
    <button> <Link to ="/product"></Link>View phones</button>
    </div>
    </div>

    <div className='second-row'>
    <div className='card'>
    <h2>PenDrives</h2>
    <img src={drive} alt=''/>
    <p>We sell quarlity smart phones at affordable price</p>
    <button> <Link to ="/products"></Link>View phones</button>
    </div>

    <div className='card'>
    <h2>Phones Cases</h2>
    <img src={head} alt=''/>
    <p>We sell quarlity smart phones at affordable price</p>
    <button> <Link to ="/products"></Link>View phones</button>
    </div>


    </div>




    </div>
  )
}

export default Home