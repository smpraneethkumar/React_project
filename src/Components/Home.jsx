import React from 'react'
import { FaCarAlt } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { discoutProducts } from './AllData';
import { FaStar } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import {SliderData} from './AllData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';



const Home = () => {
    const settings ={
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow:1,
        slidesToScroll:1
    }
    return (

        <div  >
            <div style={{backgroundColor:'whitesmoke'}}>
            <div className="container" >
                
                <Slider {...settings}>
               {
                SliderData.map((slider)=>(
                     <div className="row d-flex" key={slider.id}>
                    <div className="col-lg-5">
                         <h1 className="card-title ">{slider.title}</h1>
                            <p className="card-text">{slider.desc}</p>
                            <p className="card-text"><small className="text-body-secondary"><button>Visit Collections</button></small></p>
                    </div>
                    <div className="col-lg-2">
                        
                    </div>
                    <div className="col-lg-5">
                        
                             <img src={slider.cover} className="img-fluid" alt="..."></img>

                    </div>
                </div>
                ))
               }
               </Slider>
              
            </div>
            </div>
            {/* the four card  */}
            <div className="container">
                <div className="row justify-content-center p-2 gap-3">
                    <div className="card " style={{ width: '18rem', textAlign: 'center', padding: '25px', backgroundColor: ' rgb(241, 230, 232)', border: 'none' }}>
                        <div className="card-body">
                            <h5 className="card-title" > <FaCarAlt style={{ border: '3px solid white ', borderRadius: '40px', backgroundColor: 'white' }} size={30} /> </h5><br />
                            <h5 className="card-subtitle mb-2 ">Free Shipping</h5><br />
                            <p className="card-text">Lorem iqsum dolor sit amet</p>

                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem', textAlign: 'center', padding: '25px', backgroundColor: 'rgb(203, 236, 245)', border: 'none' }}>
                        <div className="card-body">
                            <h5 className="card-title" > <IoCard style={{ border: '3px solid white ', borderRadius: '40px', backgroundColor: 'white' }} size={30} /></h5><br />
                            <h5 className="card-subtitle mb-2 ">Safe Payment</h5><br />
                            <p className="card-text">Lorem iqsum dolor sit amet</p>

                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem', textAlign: 'center', padding: '25px', backgroundColor: 'rgb(227, 246, 198)', border: 'none' }}>
                        <div className="card-body">
                            <h5 className="card-title" > <FaShieldAlt style={{ border: '3px solid white ', borderRadius: '40px', backgroundColor: 'white' }} size={30} /></h5><br />
                            <h5 className="card-subtitle mb-2 ">Secure Payment</h5><br />
                            <p className="card-text">Lorem iqsum dolor sit amet</p>

                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem', textAlign: 'center', padding: '25px', backgroundColor: 'rgb(207, 224, 242)', border: 'none' }}>
                        <div className="card-body">
                            <h5 className="card-title" > <IoHeadset style={{ border: '3px solid white ', borderRadius: '40px', backgroundColor: 'white' }} size={30} /></h5><br />
                            <h5 className="card-subtitle mb-2 ">Free Shipping</h5><br />
                            <p className="card-text">Lorem iqsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div> <br /><br />
            {/* forbigdiscount */}
            <div className="container" style={{ backgroundColor: 'whitesmoke', padding: '100px' }}>
                <h1>Big Discount</h1><br />
                <div className="card-group gap-4 ">
                    {
                        discoutProducts && discoutProducts.map((discount) => (
                            <Link to={`/home`}>
                                <div className="card " style={{ width: '20rem', margin: '0 10px' }}>
                                <p style={{ width: '55px', backgroundColor: ' rgb(3, 3, 121)', borderRadius: '20px', color: 'white', fontSize: '12px', height: '22px', margin: '10px' }}>{discount.discount}%Off</p>
                                <img src={discount.imgUrl} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h3>{discount.productName}</h3>
                                    <p className="card-text"><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /></p>
                                    <span><h3>{discount.price}</h3><CiCirclePlus /></span>
                                </div>
                            </div> 
                            </Link>
                        ))
                    }
                </div>
            </div>
            {/* new arrives */}
            <div className="container">
                <h1>Big Discount</h1><br />
                <div className="card-group gap-4 ">
                    {
                        discoutProducts && discoutProducts.map((discount) => (
                            <div className="card " style={{ width: '20rem' }}>
                                <p style={{ width: '55px', backgroundColor: ' rgb(3, 3, 121)', borderRadius: '20px', color: 'white', fontSize: '12px', height: '22px', margin: '10px' }}>{discount.discount}%Off</p>
                                <img src={discount.imgUrl} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h3>{discount.productName}</h3>
                                    <p className="card-text"><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /><FaStar color='gold' /></p>
                                    <span><h3>{discount.price}</h3><CiCirclePlus /></span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>




        </div>
    )
}

export default Home
