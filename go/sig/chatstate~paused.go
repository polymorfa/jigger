// ParseChatstatePausedMixin matches <chatstate>. Server-initiated; nothing sends it.
func ParseChatstatePausedMixin(n *waBinary.Node) (*ChatstatePausedMixin, error)