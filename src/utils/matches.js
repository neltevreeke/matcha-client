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
