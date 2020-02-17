import React, { useEffect } from 'react'
import styles from './VerifyAccountView.scss'
import Page from 'components/Page/Page'
import { useSelector, useDispatch } from 'react-redux'
import { getRouterQuery } from '../../../../selectors/routes'
import { history } from '../../../../utils/configureStore'
import * as Routes from 'constants/Routes'
import { verifyAccount } from 'actions/users'

const VerifyAccountView = () => {
  const routerQuery = useSelector(getRouterQuery)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!routerQuery.token) {
      history.push(Routes.HOME)
    }

    dispatch(verifyAccount(routerQuery.token))
  }, [])

  return (
    <Page>
      <div className={styles.component}>
        <p>You will be redirected to home shortly...</p>
      </div>
    </Page>
  )
}

export default VerifyAccountView
