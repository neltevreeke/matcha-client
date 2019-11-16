export const getUser = state => state.user.user
export const getLoginIsLoading = state => state.user.login.isLoading
export const getLoginError = state => state.user.login.error
export const getMeIsLoading = state => state.user.me.isLoading
export const getMeError = state => state.user.me.error
export const getMeIsLoaded = state => state.user.me.isLoaded
export const getIsLoggedIn = state => !!state.user.user
