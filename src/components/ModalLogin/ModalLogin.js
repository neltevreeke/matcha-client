import React from 'react'
import Modal from 'components/Modal/Modal'
import FormLogin from './components/FormLogin/FormLogin'

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
        <FormLogin />
      )}
    />
  )
}

export default ModalLogin
