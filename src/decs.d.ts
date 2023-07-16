import type * as THREE from 'three'

declare module 'three'{
  interface Material extends THREE.Material {
    map: Texture | null
  }
}
