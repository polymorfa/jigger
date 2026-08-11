// BuildBlocklistsUpdateBlockList builds <iq type="unknown" xmlns="blocklist">. Replies with one of: SuccessWithMatch, SuccessWithMismatch, MigratedSuccessWithMismatch, CAPISuccessWithMismatch, InvalidRequest, ServerError.
func BuildBlocklistsUpdateBlockList(to types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"type": "unknown", "xmlns": "blocklist", "to": to},
	}
}