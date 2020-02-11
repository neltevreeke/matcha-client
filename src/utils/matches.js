export const getIsConnected = (potentialMatchId, connectedMatches) => {
  if (!connectedMatches) {
    return false
  }

  for (const c of connectedMatches) {
    if (potentialMatchId === c.likedUserId) {
      return true
    }
  }

  return false
}

export const getIsReported = (potentialMatchId, reportedUsers) => {
  if (!reportedUsers) {
    return false
  }

  for (const r of reportedUsers) {
    if (potentialMatchId === r.reportedUserId._id) {
      return true
    }
  }

  return false
}
