import { CubeCamera, Environment, OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

import { Ground } from './Ground'
import { Car } from '../Components/Car'
import { Rings } from '../Components/Rings'

const FbxAnimationComponent = () => {
  return (
      <Suspense fallback={null}>
    <Canvas shadows>
    <OrbitControls target={[0,0.35,0]}
    maxPolarAngle={1.45} 
    enableZoom={false}/>
        {/* Camera */}
        <PerspectiveCamera makeDefault
        
        fov={50}
        position={[2, 1, 1]} />

        {/* Background Color */}
        <color args={[0, 0, 0]} attach='background' />
        <CubeCamera resolution={256} frames={Infinity}>
{(texture)=>(
  <>
  <Environment map={texture}/>
  <Car/>
  </>

)}
        </CubeCamera>
        <Rings/>

        {/* Spotlights */}
        <SpotLight
          color={[1, 0.25, 0.7]}
          intensity={300}
          angle={1}
          penumbra={0.8}
          position={[2, 3, 0]}
          castShadow
          shadow-bias={-0.0001}
        />
        <SpotLight
          color={[0.14, 0.5, 1]}
          intensity={300}
          angle={1}
          penumbra={0.6}
          position={[-2, 3, 0]}
          castShadow
          shadow-bias={-0.0001}
        />

        {/* Ambient Light */}
            {/* Soldier Model */}
    <Ground/>
        {/* <Soldier /> */}
        {/* Orbit Controls */}
    </Canvas>
      </Suspense>
  )
}

export default FbxAnimationComponent
