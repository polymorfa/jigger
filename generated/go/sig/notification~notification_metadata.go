// ParseWaffleWFNotificationRequest matches <notification>. Server-initiated; nothing sends it.
func ParseWaffleWFNotificationRequest(n *waBinary.Node) (*WaffleWFNotificationRequest, error)