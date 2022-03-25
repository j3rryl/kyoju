import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import './listings.scss'

import nairobi_mini from './images/nairobi.jpg'
import nairobi from './images/nairobi-city.jpg'
import mombasa_mini from './images/mombasa.jpg'
import mombasa from './images/mombasa-png.png'
import kisumu_mini from './images/kisumu.jpg'
import kisumu from './images/kisumu-city.jpg'
import nakuru_mini from './images/nakuru.jpg'
import nakuru from './images/nakuru-city.jpg_large'


const Listings = () => {
  
  const [disabled,setDisabled]=useState(false)
  const disableHover=()=>{
    setDisabled(!disabled)
    setTimeout(()=>{
      setDisabled(false)
    },1500)
  }
  const[hoverState,sethoverState]=useState({
    initial:false,
    clicked:null,
    menuName:"Menu"
  })
  
  const handleMenu=()=>{
    disableHover()
    if(hoverState.initial===false){
      sethoverState({
        initial:null,
        clicked:true,
        menuName:'Close'
      })
    } else if(hoverState.clicked===true){
      sethoverState({
        clicked:!hoverState.clicked,
        menuName:"Menu"
      }) 
    } else if(hoverState.clicked===false){
      sethoverState({
        clicked:!hoverState.clicked,
        menuName:"Menu"
      })
    }
  }
  let cityName=useRef(null)
  let cityImage=useRef(null)  

  //useEffect
  useEffect(()=>{
    const abortCont=new AbortController();
    onCityHover(nairobi,cityName,cityImage,{signal:abortCont.signal})
    return()=>{
      console.log("Listings page aborted.")
      abortCont.abort()
    }
  },[cityName,cityImage])
  const cities=[
    {
      name:"Nairobi",image:nairobi_mini
    },
    {
      name:"Mombasa",image:mombasa
    },
    {
      name:"Kisumu",image:kisumu
    },
    {
      name:"Nakuru",image:nakuru
    }
  ]
  gsap.registerPlugin(ScrollTrigger)
  const onCityHover=(city,cityName,cityImage)=>{
    if(disabled===true){return} 
    disableHover()
    let tl=gsap.timeline({
        scrollTrigger:{
          trigger:cityImage,
          toggleActions:"restart none none reset",
          duration: 0.7
        }
      })
  gsap.to(cityName, {
      duration:0,
      attr:{
        src:city
      }
    })
  tl.set(cityImage,{autoAlpha:5})
  tl.from(cityImage,{
    duration: 1.5,
    xPercent:-100,
    ease:"power2.out"
  })
  tl.from(cityName,{
    duration: 1.5,
    xPercent:100,
    scale:1.3,
    delay:-1.5,
    ease:"power2.out"
  })

  }
  const onCityExit=cityName=>{
    if(disabled===true){return} 
    let tl=gsap.timeline({
      scrollTrigger:{
        trigger:cityImage,
        toggleActions:"restart none none reset",
        duration: 0.7
      }
    })
    gsap.to(cityName, {
      duration:0,
      attr:{
        src:nairobi
      }
    })
tl.set(cityImage,{autoAlpha:1})
tl.from(cityImage,{
duration: 1.5,
xPercent:100,
ease:"power2.out"
})
tl.from(cityName,{
duration: 1.5,
xPercent:-100,
scale:1.3,
delay:-1.5,
ease:"power2.out"
})
  }
  return (
    <div  className='listings-page'>
      <div className='cities-caption'>
        <h4>Check out our locations</h4>
        <p>Buying a bigger home doesn’t necessarily mean spending more money.</p>
      </div>
      <div className='img-container'>
      <div className='image-mask' ref={city=>(cityImage=city)}>
      <img className='cities-img' src={nairobi} ref={city=>(cityName=city)} />

      </div>
      </div>      
    <div className='cities'>
      {
        cities.map((city)=>
        <span key={city.name}  onMouseEnter={()=>onCityHover(city.image,cityName,cityImage)} 
        >
          {city.name}
          </span>
        )
      }
    </div>
    </div>
  )
}

export default Listings