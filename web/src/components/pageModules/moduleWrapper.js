import React from "react"
import cx from "classnames"

const ModuleWrapper = ({
  children,
  className,
  paddingTop,
  paddingBottom,
  slug,
  moduleColor,
}) => {
  // Padding Classes
  const paddingClasses = cx(className && className, {
    "pt-space-s": paddingTop === "small",
    "pt-space-m": paddingTop === "medium",
    "pt-space-l": paddingTop === "large",
    "pb-space-s": paddingBottom === "small",
    "pb-space-m": paddingBottom === "medium",
    "pb-space-l": paddingBottom === "large",
  })

  return (
    <section style={{ backgroundColor: moduleColor?.value }} className={`${paddingClasses}`} id={slug && slug.current}>
      {children}
    </section>
  )
}

export default ModuleWrapper
