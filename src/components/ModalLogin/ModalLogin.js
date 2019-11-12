import React, { useState } from 'react'
import Modal from 'components/Modal/Modal'
import FormLogin from './components/FormLogin/FormLogin'
// import request from 'utils/request'
// import { useHistory } from 'react-router-dom'

const ModalLogin = ({
  ...props
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  // let history = useHistory()

  const handleFormSubmit = async ({ email, password }) => {
    setIsSubmitting(true)

    try {
      // const res = await request('login', {
      //   method: 'POST',
      //   body: {
      //     email,
      //     password
      //   }
      // })

      // if (res.status === 200) {
      //   history.pushState('/dashboard')
      // }

      // console.log(res)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal
      {...props}
      header={(
        <span>
          Log in
        </span>
      )}
      body={(
        <>
          <FormLogin
            onSubmit={handleFormSubmit}
            isSubmitting={isSubmitting}
          />
        </>
      )}
    />
  )
}

export default ModalLogin
