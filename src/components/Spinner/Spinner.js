import React from 'react'
import styles from './Spinner.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'

const Spinner = ({
  primary,
  className
}) => (
  <svg
    className={cx(styles.component, {
      [className]: className,
      [styles.primary]: primary
    })}
    width={25}
    height={25}
    viewBox='0 0 50 50'
  >
    <circle
      className={styles.circle}
      cx='25'
      cy='25'
      r='20'
      fill='none'
    />
  </svg>
)

Spinner.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool
}

export default Spinner
