import React from 'react'
import { FaCarAlt } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";



const Home = () => {
  return (
    <div  >
    <div className="container">
        <div className="row justify-content-center p-2 gap-3">
              <div className="card " style={{width:'18rem',textAlign:'center',padding:'25px' ,backgroundColor:' rgb(241, 230, 232)' ,border:'none'}}>
  <div className="card-body">
    <h5 className="card-title" > <FaCarAlt style={{border:'3px solid white ',borderRadius:'40px',backgroundColor:'white'}}  size={30}/> </h5><br />
    <h5 className="card-subtitle mb-2 ">Free Shipping</h5><br />
    <p className="card-text">Lorem iqsum dolor sit amet</p>
    
  </div>
</div>
 <div className="card" style={{width:'18rem',textAlign:'center',padding:'25px' ,backgroundColor:'rgb(203, 236, 245)',border:'none'}}>
  <div className="card-body">
    <h5 className="card-title" > <IoCard style={{border:'3px solid white ',borderRadius:'40px',backgroundColor:'white'}} size={30}/></h5><br />
    <h5 className="card-subtitle mb-2 ">Safe Payment</h5><br />
    <p className="card-text">Lorem iqsum dolor sit amet</p>
    
  </div>
</div>
 <div className="card" style={{width:'18rem',textAlign:'center',padding:'25px' ,backgroundColor:'rgb(227, 246, 198)',border:'none' }}>
  <div className="card-body">
    <h5 className="card-title" > <FaShieldAlt style={{border:'3px solid white ',borderRadius:'40px',backgroundColor:'white'}} size={30}/></h5><br />
    <h5 className="card-subtitle mb-2 ">Secure Payment</h5><br />
    <p className="card-text">Lorem iqsum dolor sit amet</p>
    
  </div>
</div>
 <div className="card" style={{width:'18rem',textAlign:'center',padding:'25px' ,backgroundColor:'rgb(207, 224, 242)' ,border:'none'}}>
  <div className="card-body">
    <h5 className="card-title" > <IoHeadset style={{border:'3px solid white ',borderRadius:'40px',backgroundColor:'white'}} size={30}/></h5><br />
    <h5 className="card-subtitle mb-2 ">Free Shipping</h5><br />
    <p className="card-text">Lorem iqsum dolor sit amet</p>
    
  </div>
</div>
        </div>
    </div>
       
    </div>
  )
}

export default Home