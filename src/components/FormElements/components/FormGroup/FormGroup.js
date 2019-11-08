import React from 'react'
import styles from './FormGroup.scss'
import cx from 'classnames'

const FormGroup = ({
  children,
  className
}) => (
  <div
    className={cx(styles.component, {
      [className]: className
    })}
  >
    {children}
  </div>
)

FormGroup.displayName = 'FormGroup'

export default React.memo(FormGroup)
