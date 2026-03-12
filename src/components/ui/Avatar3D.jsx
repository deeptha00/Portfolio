import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, Float, ContactShadows, MeshDistortMaterial, MeshWobbleMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

function AvatarMesh() {
    const meshRef = useRef()
    const bgRef = useRef()
    const texture = useTexture(`${import.meta.env.BASE_URL}Profile_Image/profile.png`)

    // Fix texture orientation and color
    texture.colorSpace = THREE.SRGBColorSpace

    useFrame((state) => {
        const t = state.clock.getElapsedTime()

        // Subtle, smooth 3D tilt tracking the cursor
        if (meshRef.current) {
            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                (state.pointer.y * Math.PI) / 12 + 0.1,
                0.05
            )
            meshRef.current.rotation.y = THREE.MathUtils.lerp(
                meshRef.current.rotation.y,
                (state.pointer.x * Math.PI) / 12,
                0.05
            )
        }

        // Rotate background blob slowly
        if (bgRef.current) {
            bgRef.current.rotation.z = t * 0.05
        }
    })

    return (
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
            <group ref={meshRef}>
                {/* Background Distort Blob - Pushed SIGNIFICANTLY Back */}
                <mesh position={[0, 0, -4]} scale={3.5} ref={bgRef}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <MeshDistortMaterial
                        color="#8b5cf6"
                        speed={2}
                        distort={0.3}
                        radius={1}
                        opacity={0.25}
                        transparent
                        depthWrite={false}
                        roughness={0}
                    />
                </mesh>

                {/* Secondary Blue Glow - Pushed Back */}
                <mesh position={[0, 0, -3]} scale={3}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <MeshWobbleMaterial
                        color="#3b82f6"
                        speed={1}
                        factor={0.4}
                        opacity={0.15}
                        transparent
                        depthWrite={false}
                    />
                </mesh>

                {/* Circular Photo - Centered and Front */}
                <mesh position={[0, 0, 0.2]}>
                    <circleGeometry args={[2.2, 64]} />
                    <meshBasicMaterial
                        map={texture}
                        transparent
                        opacity={1}
                        side={THREE.DoubleSide}
                        alphaTest={0.05}
                    />
                </mesh>

                {/* Glass Rim - Holographic Effect */}
                <mesh position={[0, 0, 0.21]}>
                    <ringGeometry args={[2.2, 2.3, 64]} />
                    <meshStandardMaterial
                        color="#a78bfa"
                        emissive="#a78bfa"
                        emissiveIntensity={4}
                        opacity={0.8}
                        transparent
                        roughness={0}
                        metalness={1}
                    />
                </mesh>

                {/* Outer Glow Ring */}
                <mesh position={[0, 0, 0.15]}>
                    <ringGeometry args={[2.3, 2.5, 64]} />
                    <meshBasicMaterial
                        color="#8b5cf6"
                        opacity={0.1}
                        transparent
                    />
                </mesh>
            </group>
        </Float>
    )
}

export default function Avatar3D() {
    return (
        <div className="w-full h-full relative z-10 flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 10], fov: 35 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#8b5cf6" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
                <spotLight position={[0, 5, 10]} angle={0.5} penumbra={1} intensity={2} />

                <Suspense fallback={null}>
                    <AvatarMesh />
                    <Environment preset="city" />
                </Suspense>

                <ContactShadows
                    position={[0, -4.5, 0]}
                    opacity={0.2}
                    scale={10}
                    blur={3}
                    far={5}
                    color="#000000"
                />
            </Canvas>
        </div>
    )
}
