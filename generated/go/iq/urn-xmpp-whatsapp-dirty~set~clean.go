// BuildDirtyBitsClean builds <iq type="set" xmlns="urn:xmpp:whatsapp:dirty">. Replies with one of: Success, Error.
func BuildDirtyBitsClean() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "urn:xmpp:whatsapp:dirty", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "clean", Attrs: waBinary.Attrs{}},
		},
	}
}