import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

import CanvasLoader from '../Loader';

const Crystal = () => {
  const crystal = useGLTF('./crystal/crystal.gltf')

  const displacement = useLoader(THREE.TextureLoader, './crystal/textures/Crystal_displacement.png')
  const normal = useLoader(THREE.TextureLoader, './crystal/textures/Crystal_normal.png')
  const roughness = useLoader(THREE.TextureLoader, './crystal/textures/Crystal_roughness.png')

  return (
    <group>
      <primitive
        object={crystal.scene}
        scale={0.75}
        position-y={0}
        rotation-y={0}
      >
        <meshStandardMaterial
          attach="material"
          color={'#00f'}
          roughnessMap={roughness}
          normalMap={normal}
          displacementMap={displacement}
        />
      </primitive>
    </group>
  )
}

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive
      object={earth.scene}
      scale={0.75}
      position-y={0}
      rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov:45, near: 0.1, far: 200, position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}
        />
        <Earth />
        <Crystal />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas