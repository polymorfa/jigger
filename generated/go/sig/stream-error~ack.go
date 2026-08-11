// ParseStreamErrorAckKickRequest matches <stream:error>. Server-initiated; nothing sends it.
func ParseStreamErrorAckKickRequest(n *waBinary.Node) (*StreamErrorAckKickRequest, error)