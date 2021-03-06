export const getUser = state => state.user.user
export const getLoginIsLoading = state => state.user.login.isLoading
export const getLoginError = state => state.user.login.error

export const getMeIsLoading = state => state.user.me.isLoading
export const getMeError = state => state.user.me.error
export const getMeIsLoaded = state => state.user.me.isLoaded

export const getUpdateIsLoading = state => state.user.update.isLoading
export const getUpdateError = state => state.user.update.error

export const getPotentialMatches = state => state.user.potentialMatches.potentialMatches
export const getPotentialMatchesError = state => state.user.potentialMatches.error
export const getPotentialMatchesIsLoading = state => state.user.potentialMatches.isLoading
export const getPotentialMatchesIsLoaded = state => state.user.potentialMatches.isLoaded

export const getConnectedMatches = state => state.user.connectedMatches.connectedMatches
export const getConnectedMatchesError = state => state.user.connectedMatches.error
export const getConnectedMatchesIsLoading = state => state.user.connectedMatches.isLoading

export const getSelectedPotentialMatch = state => state.selectedPotentialMatch.selectedPotentialMatch

export const getNewPasswordSuccess = state => state.user.newPassword.status

export const getVerifyAccountIsLoading = state => state.user.verifyAccount.isLoading
export const getVerifyAccountStatus = state => state.user.verifyAccount.status

export const getIsLoggedIn = state => {
  const isMeLoaded = getMeIsLoaded(state)
  return isMeLoaded && !!state.user.user
}
