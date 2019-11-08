import React from 'react'
import styles from './HomeUsps.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Content from '../../../../components/Content/Content'

const uspText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus vestibulum, aliquam dolor sed, venenatis libero.'

const usps = [{
  icon: (
    <FontAwesomeIcon icon='search' />
  ),
  title: 'search',
  text: uspText
}, {
  icon: (
    <FontAwesomeIcon icon='crosshairs' />
  ),
  title: 'match',
  text: uspText
}, {
  icon: (
    <FontAwesomeIcon icon='comments' />
  ),
  title: 'connect',
  text: uspText
}]

const HomeUsps = () => {
  return (
    <Content>
      <div className={styles.component}>
        {usps.map((usp, index) => {
          return (
            <div
              key={index}
              className={styles.usp}
            >
              <div className={styles.uspIcon}>
                {usp.icon}
              </div>
              <h3 className={styles.uspTitle}>
                {usp.title}
              </h3>
              <p className={styles.uspText}>
                {usp.text}
              </p>
            </div>
          )
        })}
      </div>
    </Content>
  )
}

export default HomeUsps
