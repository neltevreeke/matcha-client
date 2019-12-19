import React from 'react'
import styles from './Button.scss'
import cx from 'classnames'

const VARIANT_TRANSPARENT = 'transparent'
const VARIANT_TRANSPARENT_BORDERED = 'transparent-bordered'
const VARIANT_DEFAULT = 'default'
const VARIANT_DEFAULT_RED = 'default-red'

const Button = ({
  children,
  variant = VARIANT_TRANSPARENT,
  className,
  isLoading,
  ...props
}) => {
  return (
    <button
      disabled={isLoading}
      className={cx(styles.component, {
        [styles[`variant--${variant}`]]: variant,
        [className]: className
      })}
      {...props}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : children}
    </button>
  )
}

Button.VARIANT_TRANSPARENT = VARIANT_TRANSPARENT
Button.VARIANT_TRANSPARENT_BORDERED = VARIANT_TRANSPARENT_BORDERED
Button.VARIANT_DEFAULT = VARIANT_DEFAULT
Button.VARIANT_DEFAULT_RED = VARIANT_DEFAULT_RED

export default Button
