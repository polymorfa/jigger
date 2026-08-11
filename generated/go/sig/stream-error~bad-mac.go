// ParseStreamErrorBadMacRequest matches <stream:error>. Server-initiated; nothing sends it.
func ParseStreamErrorBadMacRequest(n *waBinary.Node) (*StreamErrorBadMacRequest, error)