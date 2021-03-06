// unprotected routes
export const HOME = '/'

export const RESET_PASSWORD = '/reset-password'
export const NEW_PASSWORD = '/new-password'
export const VERIFY_ACCOUNT = '/verify-account'

// protected routes
export const DASHBOARD = '/dashboard'

export const SETTINGS = '/settings'
export const SETTINGS_PROFILE = `${SETTINGS}/profile`
export const SETTINGS_PICTURES = `${SETTINGS}/pictures`
export const SETTINGS_INTEREST_TAGS = `${SETTINGS}/interests`
export const SETTINGS_SEARCH_FILTERS = `${SETTINGS}/filters`
export const SETTINGS_LOCATION = `${SETTINGS}/location`
export const SETTINGS_NOTIFICATIONS = `${SETTINGS}/notifications`
export const SETTINGS_BLOCKED_USERS = `${SETTINGS}/blocked-users`

export const MATCHES = '/matches'

export const ACTIVITIES = '/activities'
