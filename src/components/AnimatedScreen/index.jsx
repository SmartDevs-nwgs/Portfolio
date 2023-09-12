import React, { useEffect } from 'react'
import * as THREE from 'three'
import { TweenMax, Power1, gsap } from 'gsap'
import { StyledAnimatedScreen } from './style'
import WeDoContent from '../WeDoContent'

const AnimatedScreen = ({ showAnimation }) => {
  let renderer, scene, camera, geometry, material
  const cubes = []
  const cubeSpeed = 0.2

  useEffect(() => {
    init()
    animate()
  }, [])

  function init() {
    const width = window.innerWidth
    const height = window.innerHeight

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 75
    scene.add(new THREE.AmbientLight(0xffffff))

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    document.body.appendChild(renderer.domElement)

    geometry = new THREE.BoxGeometry(12, 12, 3)
    material = new THREE.MeshLambertMaterial({
      color: '#ffffff',
      transparent: false,
      opacity: 1,
    })

    const nx = Math.round(width / 12) + 1
    const ny = Math.round(height / 12) + 1
    let mesh, x, y

    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < ny; j++) {
        mesh = new THREE.Mesh(geometry, material)
        x = -width / 2 + i * 12
        y = -height / 2 + j * 12
        mesh.position.set(x, y, 0)
        scene.add(mesh)
        cubes.push(mesh)
      }
    }

    startAnim()
  }

  function startAnim() {
    cubes.forEach((cube) => {
      cube.rotation.set(0, 0, 0)
      cube.material.opacity = 1
      cube.position.z = 0
      const delay = Math.random() * 2
      const rx = Math.random() * 2 * Math.PI
      const ry = Math.random() * 2 * Math.PI
      const rz = Math.random() * 2 * Math.PI
      gsap.to(cube.rotation, 2, { x: rx, y: ry, z: rz, delay })
      gsap.to(cube.position, 2, {
        z: 100,
        delay: delay + 0.5,
        ease: Power1.easeOut,
      })
      gsap.to(cube.material, 2, {
        opacity: 0,
        delay: delay + 0.5,
      })
    })
  }

  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  function hideCanvas() {
    renderer.domElement.remove()
  }

  window.addEventListener('resize', onResize)

  function onResize() {
    const newWidth = window.innerWidth
    const newHeight = window.innerHeight
    camera.aspect = newWidth / newHeight
    camera.updateProjectionMatrix()
    renderer.setSize(newWidth, newHeight)
  }

  setTimeout(() => {
    hideCanvas()
  }, 4000)

  return (
    <StyledAnimatedScreen>
      <WeDoContent showAnimation={showAnimation} />
    </StyledAnimatedScreen>
  )
}

export default AnimatedScreen
