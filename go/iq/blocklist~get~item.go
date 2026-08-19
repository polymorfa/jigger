// BuildBlocklistsGetBlockList builds <iq type="get" xmlns="blocklist">. Replies with one of: SuccessWithMismatch, MigratedSuccessWithMismatch, ForceMigratedSuccessWithMismatch, CAPISuccessWithMismatch, SuccessWithMatch, InvalidRequest, InternalServerError.
func BuildBlocklistsGetBlockList(dhash string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "blocklist", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "item", Attrs: waBinary.Attrs{"dhash": dhash}}, // optional
		},
	}
}