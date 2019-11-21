import React from 'react'
import styles from './EditableImage.scss'
import UploadArea from 'components/UploadArea/UploadArea'
import Spinner from 'components/Spinner/Spinner'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EditableImage = ({
  isUploading,
  atBottom,
  children,
  onChange
}) => {
  return (
    <div
      className={cx(styles.component, {
        [styles.isUploading]: isUploading,
        [styles.atBottom]: atBottom
      })}
    >
      <UploadArea onChange={onChange}>
        {children}
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            {isUploading ? (
              <Spinner />
            ) : (
              <div className={styles.overlayInner}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon='camera'
                />
                {atBottom && (
                  <span className={styles.atBottomLabel}>
                    Upload
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </UploadArea>
    </div>
  )
}

export default EditableImage
