export const getUser = state => state.user.user
export const getLoginIsLoading = state => state.user.login.isLoading
export const getLoginError = state => state.user.login.error

export const getMeIsLoading = state => state.user.me.isLoading
export const getMeError = state => state.user.me.error
export const getMeIsLoaded = state => state.user.me.isLoaded

export const getUpdateIsLoading = state => state.user.update.isLoading
export const getUpdateError = state => state.user.update.error

export const getInterestTagsIsLoading = state => state.user.tags.isLoading
export const getInterestTagsError = state => state.user.tags.error
export const getInterestTags = state => state.user.user.interests

export const getIsLoggedIn = state => {
  const isMeLoaded = getMeIsLoaded(state)
  return isMeLoaded && !!state.user.user
}
