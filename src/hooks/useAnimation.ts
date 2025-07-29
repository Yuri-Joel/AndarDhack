import { useEffect, useState } from "react"

export function useScrollAnimation(className = "animate-fade-in-up") {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const section = document.querySelector(`[data-animate="${className}"]`) as HTMLElement
      if (!section) return

      const rect = section.getBoundingClientRect()
      if (rect.top <= window.innerHeight * 0.85) {
        setIsVisible(true)
        window.removeEventListener("scroll", onScroll)
      }
    }

    window.addEventListener("scroll", onScroll)
    onScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [className])

  return isVisible ? className : "opacity-0 translate-y-10"
}
