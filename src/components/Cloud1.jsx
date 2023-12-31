/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/Cloud1.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cloud1(props) {
  const { nodes, materials } = useGLTF('models/Cloud1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry} material={materials.mat21} />
    </group>
  )
}

useGLTF.preload('models/Cloud1.glb')
