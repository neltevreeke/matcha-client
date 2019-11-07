import React from 'react'
import styles from './Button.scss'
import cx from 'classnames'

const VARIANT_TRANSPARENT = 'transparent'
const VARIANT_TRANSPARENT_BORDERED = 'transparent-bordered'

const Button = ({
  children,
  variant = VARIANT_TRANSPARENT,
  className,
  ...props
}) => {
  return (
    <button
      className={cx(styles.component, {
        [styles[`variant--${variant}`]]: variant,
        [className]: className
      })}
      {...props}
    >
      {children}
    </button>
  )
}

Button.VARIANT_TRANSPARENT = VARIANT_TRANSPARENT
Button.VARIANT_TRANSPARENT_BORDERED = VARIANT_TRANSPARENT_BORDERED

export default Button
