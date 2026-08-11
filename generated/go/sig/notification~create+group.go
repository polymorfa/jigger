// ParseGroupsJoinNotificationRequest matches <notification>. Server-initiated; nothing sends it.
func ParseGroupsJoinNotificationRequest(n *waBinary.Node) (*GroupsJoinNotificationRequest, error)