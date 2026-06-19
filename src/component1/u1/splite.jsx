import { Suspense, lazy, useEffect, useRef, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

// iOS Safari ka WebGL hamesha unreliable hota hai - ise hamesha fallback do
function isIOSSafari() {
  const ua = navigator.userAgent
  const isIOS = /iPad|iPhone|iPod/.test(ua)
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua)
  return isIOS && isSafari
}

// Android/other low-RAM, low-core devices
function isWeakAndroid() {
  const isAndroid = /Android/i.test(navigator.userAgent)
  const hasLowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4
  const hasFewCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4
  return isAndroid && (hasLowMemory || hasFewCores)
}

function useShouldShowFallback() {
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    if (isIOSSafari() || isWeakAndroid()) {
      setShowFallback(true)
    }
  }, [])

  return showFallback
}

function FallbackView({ className, fallbackImage }) {
  return (
    <div className={className}>
      {fallbackImage ? (
        <img
          src={fallbackImage}
          alt="3D preview"
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white/50 text-sm">
          3D preview not available on this device
        </div>
      )}
    </div>
  )
}

export function SplineScene({ scene, className, fallbackImage }) {
  const containerRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [crashed, setCrashed] = useState(false)
  const showFallback = useShouldShowFallback()

  // Viewport ke andar aane par hi load karo (idle time mein)
  useEffect(() => {
    if (showFallback) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if ('requestIdleCallback' in window) {
            requestIdleCallback(() => setShouldLoad(true))
          } else {
            setTimeout(() => setShouldLoad(true), 300)
          }
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [showFallback])

  // Agar GPU/WebGL beech mein crash ho jaye to silently fallback dikhao
  useEffect(() => {
    if (!shouldLoad) return
    const canvas = containerRef.current?.querySelector('canvas')
    if (!canvas) return

    const handleContextLost = (e) => {
      e.preventDefault()
      setCrashed(true)
    }

    canvas.addEventListener('webglcontextlost', handleContextLost)
    return () => canvas.removeEventListener('webglcontextlost', handleContextLost)
  }, [shouldLoad])

  if (showFallback || crashed) {
    return (
      <div ref={containerRef} className={className}>
        <FallbackView className={className} fallbackImage={fallbackImage} />
      </div>
    )
  }

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <span>Loading...</span>
            </div>
          }
        >
          <Spline
            scene={scene}
            className={className}
            onLoad={() => {
              // Lazy-mount ke baad Spline ko size dobara calculate karne par majboor karo
              requestAnimationFrame(() => {
                window.dispatchEvent(new Event('resize'))
              })
            }}
          />
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white/30 text-sm">Loading 3D scene…</span>
        </div>
      )}
    </div>
  )
}
