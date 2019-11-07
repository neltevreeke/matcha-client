import React from 'react'
import styles from './Page.scss'
import Header from 'components/Header/Header'

const Page = ({
  children
}) => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
    </>
  )
}

export default Page
