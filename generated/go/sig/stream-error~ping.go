// ParseStreamErrorPingKickRequest matches <stream:error>. Server-initiated; nothing sends it.
func ParseStreamErrorPingKickRequest(n *waBinary.Node) (*StreamErrorPingKickRequest, error)