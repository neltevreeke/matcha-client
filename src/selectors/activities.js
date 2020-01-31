import { getUser } from './user'

export const getActivitiesList = state => state.activities.activities
export const getActivitiesIsLoading = state => state.activities.isLoading

export const getUnreadActivitiesCount = state => {
  const user = getUser(state)
  const userId = user._id
  const activities = getActivitiesList(state)

  return activities
    .reduce((output, currentActivity) => {
      if (!currentActivity?.seenBy?.some(u => u._id === userId)) {
        output++
      }

      return output
    }, 0)
}
