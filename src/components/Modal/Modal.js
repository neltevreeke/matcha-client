import React from 'react'
import ReactModal from 'react-modal'
import styles from './Modal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

ReactModal.setAppElement('#root')

const Modal = ({
  isOpen,
  onExited,
  hideModal,
  header,
  footer,
  body
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onExited}
      closeTimeoutMS={140}
      className={styles.component}
      overlayClassName={styles.overlay}
    >
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <div className={styles.headerText}>
              {header}
            </div>
            <button
              className={styles.btnClose}
              onClick={hideModal}
            >
              <FontAwesomeIcon
                className={styles.btnCloseIcon}
                icon='times'
              />
            </button>
          </div>
          <div className={styles.body}>
            {body}
          </div>
          {footer && (
            <div className={styles.footer}>
              {footer}
            </div>
          )}
        </div>
      </div>
    </ReactModal>
  )
}

export default Modal
