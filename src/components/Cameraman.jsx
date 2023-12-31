/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/cameraman.glb 
Author: TheDirector (https://sketchfab.com/The-Director)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cameraman-62ea2ffb7d37476e8e5f3e93c2ef5aea
Title: ---CameraMan---
*/

import React  from 'react'
import {  useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Cameraman(props) {

  const gltf = useLoader(GLTFLoader, 'models/scene.gltf')
  const myMesh = React.useRef()




  return (
    <primitive ref={myMesh} object={gltf.scene}/>
    )
  
}

