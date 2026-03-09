import * as THREE from 'three'

/* ───────────────────────────────────────────────────────────
   Shared wireframe material helpers
   ─────────────────────────────────────────────────────────── */
const edgeMat = (opacity = 0.6) =>
  new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity })

/** Convert BufferGeometry → wireframe LineSegments (cleaner lines) */
function wireEdges(geo: THREE.BufferGeometry, opacity = 0.6) {
  return new THREE.LineSegments(new THREE.EdgesGeometry(geo, 20), edgeMat(opacity))
}

/* ───────────────────────────────────────────────────────────
   1.  Diesel Generator / Genset
   ─────────────────────────────────────────────────────────── */
function buildGenset(): THREE.Group {
  const g = new THREE.Group()

  // Engine block — main cylinder (horizontal)
  const engineGeo = new THREE.CylinderGeometry(0.9, 0.9, 2.8, 16)
  const engine = wireEdges(engineGeo, 0.55)
  engine.rotation.z = Math.PI / 2
  engine.position.set(0, 0.6, 0)
  g.add(engine)

  // Cylinder head bumps (3 cylinders on top)
  for (let i = -1; i <= 1; i++) {
    const headGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.6, 8)
    const head = wireEdges(headGeo, 0.4)
    head.position.set(i * 0.7, 1.55, 0)
    g.add(head)
  }

  // Generator body — larger cylinder at rear
  const genGeo = new THREE.CylinderGeometry(1.05, 1.05, 1.4, 16)
  const gen = wireEdges(genGeo, 0.5)
  gen.rotation.z = Math.PI / 2
  gen.position.set(-2.1, 0.6, 0)
  g.add(gen)

  // Alternator fins (discs)
  for (let i = 0; i < 5; i++) {
    const finGeo = new THREE.RingGeometry(0.5, 1.02, 16)
    const fin = wireEdges(finGeo, 0.25)
    fin.rotation.y = Math.PI / 2
    fin.position.set(-1.5 - i * 0.25, 0.6, 0)
    g.add(fin)
  }

  // Exhaust pipe
  const exhaustGeo = new THREE.CylinderGeometry(0.15, 0.18, 1.6, 8)
  const exhaust = wireEdges(exhaustGeo, 0.4)
  exhaust.position.set(0.8, 1.9, 0.4)
  exhaust.rotation.z = 0.3
  g.add(exhaust)

  // Muffler cap
  const mufflerGeo = new THREE.CylinderGeometry(0.25, 0.15, 0.3, 8)
  const muffler = wireEdges(mufflerGeo, 0.35)
  muffler.position.set(1.05, 2.6, 0.4)
  g.add(muffler)

  // Base frame (steel skid)
  const baseGeo = new THREE.BoxGeometry(5.6, 0.18, 2.4)
  const base = wireEdges(baseGeo, 0.45)
  base.position.set(-0.5, -0.5, 0)
  g.add(base)

  // Frame rails
  for (const z of [-1.1, 1.1]) {
    const railGeo = new THREE.BoxGeometry(5.6, 0.35, 0.12)
    const rail = wireEdges(railGeo, 0.3)
    rail.position.set(-0.5, -0.3, z)
    g.add(rail)
  }

  // Control panel (box on side)
  const panelGeo = new THREE.BoxGeometry(0.15, 1.0, 1.4)
  const panel = wireEdges(panelGeo, 0.4)
  panel.position.set(1.7, 0.3, 0)
  g.add(panel)

  // Fuel tank (under base)
  const tankGeo = new THREE.BoxGeometry(3.0, 0.5, 1.6)
  const tank = wireEdges(tankGeo, 0.3)
  tank.position.set(-0.3, -0.9, 0)
  g.add(tank)

  g.scale.setScalar(1.55)
  return g
}

/* ───────────────────────────────────────────────────────────
   2.  Solar Panel Array
   ─────────────────────────────────────────────────────────── */
function buildSolarPanel(): THREE.Group {
  const g = new THREE.Group()

  // Panel surface — flat box tilted
  const panelGeo = new THREE.BoxGeometry(4.0, 0.06, 2.8)
  const panel = wireEdges(panelGeo, 0.5)
  panel.rotation.x = -0.55
  panel.position.set(0, 1.6, 0.35)
  g.add(panel)

  // Grid lines on panel (cells)
  const cellMat_ = edgeMat(0.25)
  for (let col = -1.5; col <= 1.5; col += 0.5) {
    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(col, 0.04, -1.35),
      new THREE.Vector3(col, 0.04, 1.35)
    ])
    const line = new THREE.Line(lineGeo, cellMat_)
    line.rotation.x = -0.55
    line.position.set(0, 1.6, 0.35)
    g.add(line)
  }
  for (let row = -1.2; row <= 1.2; row += 0.6) {
    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-1.95, 0.04, row),
      new THREE.Vector3(1.95, 0.04, row)
    ])
    const line = new THREE.Line(lineGeo, cellMat_)
    line.rotation.x = -0.55
    line.position.set(0, 1.6, 0.35)
    g.add(line)
  }

  // Support pole (vertical)
  const poleGeo = new THREE.CylinderGeometry(0.08, 0.1, 2.2, 6)
  const pole = wireEdges(poleGeo, 0.45)
  pole.position.set(0, 0.5, 0)
  g.add(pole)

  // Angled support brace
  const braceGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.8, 4)
  const brace = wireEdges(braceGeo, 0.35)
  brace.rotation.x = -0.85
  brace.position.set(0, 1.1, -0.7)
  g.add(brace)

  // Ground mount plate
  const mountGeo = new THREE.BoxGeometry(1.4, 0.1, 1.4)
  const mount = wireEdges(mountGeo, 0.35)
  mount.position.set(0, -0.6, 0)
  g.add(mount)

  g.scale.setScalar(1.55)
  return g
}

/* ───────────────────────────────────────────────────────────
   3.  High-voltage Power Transformer
   ─────────────────────────────────────────────────────────── */
function buildTransformer(): THREE.Group {
  const g = new THREE.Group()

  // Main tank body
  const tankGeo = new THREE.BoxGeometry(2.4, 2.6, 1.6)
  const tank = wireEdges(tankGeo, 0.5)
  tank.position.set(0, 0.3, 0)
  g.add(tank)

  // Cooling fins (vertical ribs on sides)
  for (let i = -2; i <= 2; i++) {
    for (const sign of [-1, 1]) {
      const finGeo = new THREE.BoxGeometry(0.06, 2.0, 1.4)
      const fin = wireEdges(finGeo, 0.2)
      fin.position.set(sign * (1.25 + Math.abs(i) * 0.09), 0.3, 0)
      g.add(fin)
    }
  }

  // High-voltage bushings on top (3 porcelain insulators)
  for (let i = -1; i <= 1; i++) {
    const bushingGroup = new THREE.Group()
    // Insulator discs stacked
    for (let d = 0; d < 4; d++) {
      const discGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.08, 10)
      const disc = wireEdges(discGeo, 0.4)
      disc.position.y = d * 0.32
      bushingGroup.add(disc)

      const shaftGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.32, 6)
      const shaft = wireEdges(shaftGeo, 0.3)
      shaft.position.y = d * 0.32 + 0.16
      bushingGroup.add(shaft)
    }
    // Top terminal sphere
    const termGeo = new THREE.SphereGeometry(0.12, 6, 6)
    const term = wireEdges(termGeo, 0.45)
    term.position.y = 1.35
    bushingGroup.add(term)

    bushingGroup.position.set(i * 0.7, 1.6, 0)
    g.add(bushingGroup)
  }

  // Conservator tank (small cylinder on top)
  const consGeo = new THREE.CylinderGeometry(0.25, 0.25, 1.6, 10)
  const cons = wireEdges(consGeo, 0.35)
  cons.rotation.z = Math.PI / 2
  cons.position.set(0, 2.0, -0.6)
  g.add(cons)

  // Base
  const baseGeo = new THREE.BoxGeometry(3.0, 0.2, 2.0)
  const base = wireEdges(baseGeo, 0.4)
  base.position.set(0, -1.05, 0)
  g.add(base)

  g.scale.setScalar(1.45)
  return g
}


/* ───────────────────────────────────────────────────────────
   Entry point — cycle through objects at right edge
   ─────────────────────────────────────────────────────────── */
export function initThreeBackground(container: HTMLElement): void {
  try {
    const canvas = document.createElement('canvas')
    canvas.style.cssText =
      'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;'
    container.style.position = 'relative'
    container.insertBefore(canvas, container.firstChild)

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 7

    // ── Build all three objects ──────────────────────────────
    const models = [buildGenset(), buildSolarPanel(), buildTransformer()]
    let currentIdx = 0

    // Pivot group — positioned at right edge, half off-screen
    const pivot = new THREE.Group()
    scene.add(pivot)
    pivot.add(models[currentIdx])

    // ── Position: right side, half cropped ───────────────────
    function positionPivot() {
      const halfW = Math.tan((50 / 2) * Math.PI / 180) * 7
      pivot.position.set(halfW * 0.72, -0.3, 0)
    }

    // ── Resize ───────────────────────────────────────────────
    function resize() {
      const w = container.clientWidth
      const h = container.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      positionPivot()
    }
    resize()
    window.addEventListener('resize', resize)

    // ── Cycle to next model every 12s ────────────────────────
    setInterval(() => {
      pivot.remove(models[currentIdx])
      currentIdx = (currentIdx + 1) % models.length
      pivot.add(models[currentIdx])
    }, 12_000)

    // ── Animation loop ───────────────────────────────────────
    function animate() {
      requestAnimationFrame(animate)
      pivot.rotation.y += 0.003
      pivot.rotation.x = 0.25 + Math.sin(Date.now() * 0.0003) * 0.08
      renderer.render(scene, camera)
    }
    animate()

  } catch {
    // WebGL unavailable — silently degrade
  }
}
