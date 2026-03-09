export function initCursor(): void {
  // Only on devices that support hover (desktop/trackpad)
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
  // Guard against double-init on same page
  if (document.getElementById('c-dot')) return

  const dot  = document.createElement('div')
  const ring = document.createElement('div')
  dot.id  = 'c-dot'
  ring.id = 'c-ring'
  document.body.append(dot, ring)

  let mx = -300, my = -300   // mouse (dot follows instantly)
  let rx = -300, ry = -300   // ring (lerp-lagged)

  document.addEventListener('mousemove', (e: MouseEvent) => {
    mx = e.clientX
    my = e.clientY
    dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
  }, { passive: true })

  // Smooth trailing ring
  ;(function loop() {
    rx += (mx - rx) * 0.10
    ry += (my - ry) * 0.10
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
    requestAnimationFrame(loop)
  })()

  // Expand ring on interactive elements
  document.body.addEventListener('mouseover', (e: Event) => {
    document.body.classList.toggle(
      'c-hover',
      !!(e.target as Element).closest('a, button')
    )
  })
}
