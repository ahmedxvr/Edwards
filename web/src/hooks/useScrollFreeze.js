import { useLayoutEffect } from "react"

export const useScrollFreeze = () => {
  const isClient = typeof window === "object"

  useLayoutEffect(() => {
    if (!isClient) {
      return false
    }
    const original = window.getComputedStyle(document.documentElement).overflow
    document.documentElement.style.overflow = "hidden"
    return () => {
      document.documentElement.style.overflow = original
    }
  }, [isClient])
}
