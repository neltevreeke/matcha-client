import React from 'react'
import Modal from 'components/Modal/Modal'

const ModalLogin = ({
  ...props
}) => {
  return (
    <Modal
      {...props}
      header={(
        <span>
          Log in
        </span>
      )}
      body={(
        <div>
          Form goes here...
        </div>
      )}
    />
  )
}

export default ModalLogin
