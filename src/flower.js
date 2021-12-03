import React, { Component, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import { Curve } from 'three';

const generateEquation = () => {
	const number = Math.ceil( Math.random() * 6 );
	const trig = Math.floor( Math.random() * 2 );

	if ( trig == 1 ) {
		return (x) => Math.sin(number * 2 * Math.PI * x);
	}
	else {
		return (x) => Math.cos(number * 2 * Math.PI * x);
	}
}

class CustomSinCurve extends THREE.Curve {

	constructor( equation, scale = 1 ) {

		super();

		this.equation = equation;
		this.zDiv = Math.random() * 3 + 0.25;
		this.scale = scale;

	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

    const equation = function(x) {
      return Math.sin(4 * 2 * Math.PI * x);
    }

		const tx = this.equation(t) * Math.cos( 2 * Math.PI * t );
		const ty = this.equation(t) * Math.sin( 2 * Math.PI * t );
		const tz = this.equation(t) / this.zDiv / (this.scale * 0.2);

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

	}
}

class SinComponent extends React.Component {

}

//class SmallFlower extends Component {
  //render() {
function SmallFlower(props) {

  const mesh1 = React.useRef();
  const [curve, setCurve] = useState(null);
  if (curve == null) {
    //console.log("curve null, setting")
    setCurve(new CustomSinCurve( generateEquation(), props.scale ))
  }

  useFrame(() => {
    //console.log("Hey, I'm executing every frame!")
    mesh1.current.rotation.x += 0.01
    mesh1.current.rotation.y += 0.01
  })
    
  return (
    <mesh ref={mesh1}>
      <tubeGeometry args={[curve, 200, .5, 5, false]}/>
      <meshNormalMaterial />
    </mesh>
  );
}

function FullFlower() {
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <div className="small-flower" onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}>
      <Canvas camera={{ fov: 60, position: [0, 0, 40]}}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <SmallFlower scale="5"/>
        <SmallFlower scale="10"/>
        <SmallFlower scale="15"/>
      </Canvas>
    </div>
  )
}

export default FullFlower;