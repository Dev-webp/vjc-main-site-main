'use client';

import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

function Model() {
  const ref = useRef();
  const [model, setModel] = useState();

  useEffect(() => {
    new FBXLoader().load('/models/human.fbx', (fbx) => {
      setModel(fbx);
    });
  }, []);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.01;
  });

  return model ? <primitive ref={ref} object={model} /> : null;
}

export default function ThreeDFBX() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 7]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
