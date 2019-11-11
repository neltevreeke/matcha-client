import React from 'react'
import styles from './HomeHero.scss'
import Button from '../../../../components/Button/Button'
import ModalSignUp from '../../../../components/ModalSignUp/ModalSignUp'
import { useModal } from 'react-modal-hook'

const HomeHero = () => {
  const [showModalSignUp, hideModalSignUp] = useModal(({
    in: isOpen,
    onExcited
  }) => {
    return (
      <ModalSignUp
        isOpen={isOpen}
        onExcited={onExcited}
        hideModal={hideModalSignUp}
      />
    )
  })

  const handleBtnSignUpClick = () => {
    showModalSignUp()
  }

  return (
    <div className={styles.component}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Your love might be closer than you think...
        </h1>
        <div>
          <Button
            className={styles.btnSignUp}
            variant={Button.VARIANT_TRANSPARENT_BORDERED}
            onClick={handleBtnSignUpClick}
          >
            sign up
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
