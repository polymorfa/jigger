// ParseClientLogLogRequest matches <notification>. Server-initiated; nothing sends it.
func ParseClientLogLogRequest(n *waBinary.Node) (*ClientLogLogRequest, error)