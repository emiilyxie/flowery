import React, { Component, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three';

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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
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

const clock = new THREE.Clock();
const delta = clock.getDelta();

/*
const anim1times = [0, 0.5, 1, 1.5, 2];
const anim1vals = [0, 0, 0, 
                   0, 0, Math.PI / 6,
                   0, 0, Math.PI / 2,
                   0, 0, 5 * Math.PI / 6,
                   0, 0, Math.PI];

const anim1KF = new THREE.VectorKeyframeTrack('.rotation', anim1times, anim1vals);

const anim1tracks = [anim1KF];
const anim1clip = new THREE.AnimationClip("rotate-forward", -1, anim1tracks);
*/

function SmallFlower(props) {

  const mesh1 = React.useRef();
  const [curve, setCurve] = useState(null);
  const [direction, setDirection] = useState(true);
  /*
  const [surpriseX, setSX] = useState(1);
  const [surpriseY, setSY] = useState(1);
  if (getRandomInt(2) == 0) setSX(-1);
  if (getRandomInt(2) == 0) setSY(-1);
  */
  if (curve == null) {
    //console.log("curve null, setting")
    setCurve(new CustomSinCurve( generateEquation(), props.scale ))
  }

  useFrame(() => {
    //console.log("Hey, I'm executing every frame!")
    let meshRotation = mesh1.current.rotation;
    if (meshRotation.y > 2 * Math.PI) setDirection(false);
    if (meshRotation.y < 0) setDirection(true);

    if (props.hover) {
      if (direction) {
        meshRotation.y += 0.1;
        meshRotation.x += 0.1;
      }
      else {
        meshRotation.y -= 0.1;
        meshRotation.x -= 0.1;
      }
      //mixer.update(delta);
    }
    else {
      if (meshRotation.y > 0) {
        meshRotation.y -= 0.1;
        meshRotation.x -= 0.1;
        setDirection(true);
      }
    }
  })
    
  return (
    <mesh ref={mesh1} rotation={[0, 0, 0]}>
      <tubeGeometry args={[curve, 256, .8, 5, false]}/>
      <meshNormalMaterial />
      {/*<meshStandardMaterial color="#ECE2E1"/>*/}
    </mesh>
  );
}

function FullFlower() {
  const [hovered, setHovered] = useState(false)

  /*
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  */

  return (
    <div className="small-flower" onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}>
      <Canvas camera={{ fov: 60, position: [0, 0, 100]}}>
        <ambientLight intensity={0.6} />
        <SmallFlower scale="8" hover={hovered}/>
        <SmallFlower scale="16" hover={hovered}/>
        <SmallFlower scale="32" hover={hovered}/>
      </Canvas>
    </div>
  )
}

function FlowerGrid(props) {
  return( [...Array(props.n)].map((e, i) => <FullFlower />) );
}

export { FullFlower, FlowerGrid };