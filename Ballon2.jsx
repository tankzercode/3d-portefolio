/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 public/models/ballon2.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ballon2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pSphere16_1.geometry} material={materials.blinn6SG} />
      <mesh geometry={nodes.pSphere16_1_1.geometry} material={materials.blinn7SG} />
      <mesh geometry={nodes.pSphere16_1_2.geometry} material={materials.blinn10SG} />
    </group>
  )
}

useGLTF.preload('/ballon2.glb')
