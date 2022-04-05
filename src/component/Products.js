import React from 'react'
import Phone1 from "../pics/Phone3.jpg"
import phone2 from "../pics/Phone3.jpg"
import phone3 from "../pics/Phone3.jpg"
function Products() {
  return (
    <div>
    <div className='smartphones'>

    <div className='card'>
    <h2>Nombo</h2>
    <img src={Phone1} alt=''/>
    <p>Ghc1,300</p>
    <button>Buy Me</button>
    </div>


    <div className='card'>
    <h2>iphone</h2>
    <img src={phone2} alt=''/>
    <p>Ghc 10,000</p>
    <button>Buy Me</button>
    </div>


    <div className='card'>
    <h2>Techno</h2>
    <img src={phone3} alt=''/>
    <p>Ghc 800</p>
    <button>Buy Me</button>
    </div>
    </div>
   
    <div className='headphones'></div>

    <div className='pendrives'></div>
    
    <div className="phonecases"></div>
    </div>

  )
}

export default Products