/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/cloud7.glb 
Author: curiositysphere (https://sketchfab.com/curiositysphere)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cloudsculpt2-2c6409c6f3db4c4a8fea3c6f1ef3d334
Title: Cloudsculpt2
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cloud7(props) {
  const { nodes, materials } = useGLTF('models/cloud7.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('models/cloud7.glb')
