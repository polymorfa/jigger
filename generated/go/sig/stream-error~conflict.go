// ParseStreamErrorConflictRequest matches <stream:error>. Server-initiated; nothing sends it.
func ParseStreamErrorConflictRequest(n *waBinary.Node) (*StreamErrorConflictRequest, error)