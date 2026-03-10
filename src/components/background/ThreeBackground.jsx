import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Float, Stars, Environment, Grid } from '@react-three/drei'
import * as THREE from 'three'

function NeuralNetwork() {
    const points = useMemo(() => {
        const p = new Array(200).fill(0).map(() => (Math.random() - 0.5) * 20)
        return new Float32Array(p)
    }, [])

    const lineCount = 100
    const lines = useMemo(() => {
        const l = []
        for (let i = 0; i < lineCount; i++) {
            const start = new THREE.Vector3(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20
            )
            const end = start.clone().add(new THREE.Vector3(
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 5
            ))
            l.push(start, end)
        }
        return l
    }, [])

    const lineRef = useRef()

    useFrame((state) => {
        if (lineRef.current) {
            lineRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
            lineRef.current.rotation.x = state.clock.getElapsedTime() * 0.03
        }
    })

    return (
        <group ref={lineRef}>
            {lines.map((p, i) => i % 2 === 0 && (
                <line key={i}>
                    <bufferGeometry attach="geometry">
                        <bufferAttribute
                            attach="attributes-position"
                            count={2}
                            array={new Float32Array([lines[i].x, lines[i].y, lines[i].z, lines[i + 1].x, lines[i + 1].y, lines[i + 1].z])}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial attach="material" color="#8b5cf6" transparent opacity={0.1} />
                </line>
            ))}
        </group>
    )
}

function FloatingParticles({ count = 2000 }) {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 50
            p[i * 3 + 1] = (Math.random() - 0.5) * 50
            p[i * 3 + 2] = (Math.random() - 0.5) * 50
        }
        return p
    }, [count])

    const pointsRef = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        pointsRef.current.rotation.y = time * 0.02
        pointsRef.current.rotation.x = time * 0.01
    })

    return (
        <Points ref={pointsRef} positions={points} stride={3}>
            <PointMaterial
                transparent
                color="#8b5cf6"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    )
}

function MovingLights() {
    const lightRef = useRef()
    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        lightRef.current.position.x = Math.sin(time * 0.5) * 10
        lightRef.current.position.y = Math.cos(time * 0.3) * 10
    })

    return (
        <group>
            <pointLight ref={lightRef} intensity={2} color="#8b5cf6" distance={20} />
            <pointLight position={[-10, 5, -5]} intensity={1} color="#3b82f6" distance={20} />
            <pointLight position={[10, -5, 5]} intensity={1} color="#d946ef" distance={20} />
        </group>
    )
}

function CameraInteraction() {
    useFrame((state) => {
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 2, 0.05)
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 2, 0.05)
        state.camera.lookAt(0, 0, 0)
    })
    return null
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
                <fog attach="fog" args={['#030303', 10, 50]} />
                <ambientLight intensity={0.2} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Grid
                    position={[0, -10, 0]}
                    args={[100, 100]}
                    cellSize={1}
                    cellThickness={1}
                    cellColor="#6b21a8"
                    sectionSize={5}
                    sectionThickness={1.5}
                    sectionColor="#9333ea"
                    fadeDistance={50}
                    fadeStrength={1}
                />
                <NeuralNetwork />
                <FloatingParticles />
                <MovingLights />
                <Environment preset="city" />
                <CameraInteraction />
            </Canvas>
        </div>
    )
}
