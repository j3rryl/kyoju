import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {Image, OrbitControls, Preload, Scroll, ScrollControls, Stars, useScroll} from '@react-three/drei'
import { Suspense, useRef } from "react"
import restate1 from './images/restate1.jpg'
import restate2 from './images/restate2.jpg'
import restate11 from './images/restate11.jpg'
import restate12 from './images/restate12.jpg'
import restate4 from './images/restate4.jpg'
import restate20 from './images/restate20.jpg'
import restate24 from './images/restate24.jpg'
import restate22 from './images/restate22.jpg'



// import './Home.css'
function Images(){
  const{width,height}=useThree((state)=>state.viewport)
  const data=useScroll()
  const group=useRef()
  useFrame(()=>{
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(1.2, 1 / 3) / 3
    group.current.children[3].material.zoom = 1 + data.range(1.2, 1 / 3) / 3
    group.current.children[4].material.zoom = 1 + data.range(1.6, 1 / 3) / 3
    group.current.children[5].material.grayscale = 1 + data.range(1.6, 1 / 3) / 3
    group.current.children[6].material.zoom = 1 + data.range(1.8, 1 / 3) / 3
    group.current.children[7].material.grayscale = 1 + data.range(1.8, 1 / 3) / 3

  })
  return(
    <group ref={group}>
      <Image position={[0,1,1]} scale={[10,4.5,3]} url={restate1}/>
      <Image position={[1,-3.3,1]} scale={[4,1.8,3]} url={restate2}/>
      <Image position={[-3.5,-height+3,1.5]} scale={[4,3,4]} url={restate11}/>
      <Image position={[0.2,-height,1]} scale={[4,3,3]} url={restate12}/>
      <Image position={[4.5,-height,2]} scale={[6,4,3]} url={restate4}/>
      <Image position={[4.5,-height-6.3,1]} scale={[6,4,3]} url={restate20}/>
      <Image position={[0.2,-height-7.2,2]} scale={[6,3,3]} url={restate24}/>
      <Image position={[-2.5,-height-8.3,1.5]} scale={[6,3,3]} url={restate22}/>


    </group>
  )
}
const Home = () => {
  return (
    <>
    <Canvas>
    <Suspense fallback={null}>
      <ScrollControls
      pages={2.95}
      damping={4}
      distance={1}
      horizontal={false}
      infinite={false}
      >
      {/* <ambientLight intensity={0.5}/> */}
    <Scroll>
    <Images />
    </Scroll>
    <Scroll className='floating-titles' html>
            <h1 style={{ position: 'absolute', top: '0vh', left: '60vw', fontSize:'15rem', color:'black'}}>A</h1>
            <h1 style={{ position: 'absolute', top: '90vh', left: '60vw' }}>Place</h1>
            <h1 style={{ position: 'absolute', top: '80vh', left: '0.5vw', fontSize: '15rem' }}>To</h1>
            <h1 style={{ position: 'absolute', top: '130vh', left: '30vw', fontSize: '10rem' }}>Call</h1>
            <h1 style={{ position: 'absolute', top: '170vh', left: '30vw',right:'0', fontSize: '14rem',color:'black' }}>Home</h1>

    </Scroll>
    
    </ScrollControls>
    <Preload />
    </Suspense>
    </Canvas>
    </>
  )
}

export default Home