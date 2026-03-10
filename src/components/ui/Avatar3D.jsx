import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function AvatarMesh() {
    const meshRef = useRef()
    const texture = useTexture('/Profile_Image/profile.png')

    // Fix texture orientation if its upside down
    texture.colorSpace = THREE.SRGBColorSpace

    useFrame((state) => {
        // Subtle, smooth 3D tilt tracking the cursor
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
            meshRef.current.rotation.x,
            (state.pointer.y * Math.PI) / 10 + 0.05,
            0.05
        )
        meshRef.current.rotation.y = THREE.MathUtils.lerp(
            meshRef.current.rotation.y,
            (state.pointer.x * Math.PI) / 10,
            0.05
        )
    })

    return (
        <Float speed={3} rotationIntensity={0.2} floatIntensity={0.8}>
            <group ref={meshRef}>
                {/* Photo Texture Plane */}
                <mesh position={[0, 0, 0]}>
                    <planeGeometry args={[4.5, 4.5]} />
                    <meshStandardMaterial map={texture} roughness={0.4} transparent opacity={1} />
                </mesh>
            </group>
        </Float>
    )
}

export default function Avatar3D() {
    return (
        <div className="w-[120%] h-[120%] relative z-10 -ml-[10%] -mt-[10%]">
            <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#8b5cf6" />
                <directionalLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
                <Suspense fallback={null}>
                    <AvatarMesh />
                </Suspense>
                <ContactShadows position={[0, -3.5, 0]} opacity={0.6} scale={12} blur={2.5} far={4} color="#8b5cf6" />
            </Canvas>
        </div>
    )
}
