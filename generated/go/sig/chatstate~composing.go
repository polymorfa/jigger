// ParseChatstateComposingMixin matches <chatstate>. Server-initiated; nothing sends it.
func ParseChatstateComposingMixin(n *waBinary.Node) (*ChatstateComposingMixin, error)