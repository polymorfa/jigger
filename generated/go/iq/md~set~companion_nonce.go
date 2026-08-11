// BuildMdSetCompanionNonce builds <iq type="set" xmlns="md">. Replies with one of: Success.
func BuildMdSetCompanionNonce() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "md", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "companion_nonce", Attrs: waBinary.Attrs{}},
		},
	}
}