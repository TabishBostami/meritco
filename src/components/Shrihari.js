import image from '../components/images/image.png'
import image1 from '../components/images/image1.png'
import image2 from '../components/images/image2.png'
import './shrihari.css';

import React from 'react'

export default function Shrihari() {
  return (
    <>
    <div className="main">
      <div className='left'>
        <h1>Merit <span> teacher</span> in near you...</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus non quam numquam. Iure exercitationem molestias ad harum. Amet, harum laborum? Est earum ab accusantium ullam non itaque fuga, ducimus voluptate.</p>
        <button>Contact Us</button>
      </div>
      <div className="photo">
        <img className='pic' src={image} alt="" />
      </div>
    </div>
    <div className="label">
      <img className='pic1' src={image1} alt="" />
    </div>
    <div className="main2">
    <div className="photo">
        <img className='pic2' src={image2} alt="" />
      </div>
      <div className='left'>
        <h4>How we work</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus non quam numquam. Iure exercitationem molestias ad harum. Amet, harum laborum? Est earum ab accusantium ullam non itaque fuga, ducimus voluptate.</p>
        <button>Contact Us</button>
      </div>
     </div>
    
  </>
  )
}

