/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 public/models/ballon1.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Balon1(props) {
  const { nodes, materials } = useGLTF('/models/ballon1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Hot_Air_Balloon.geometry} material={materials.Mat} />
    </group>
  )
}

useGLTF.preload('/models/ballon1.glb')
