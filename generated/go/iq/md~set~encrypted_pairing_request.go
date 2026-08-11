// BuildMdSetEncryptedPairing builds <iq type="set" xmlns="md">. Replies with one of: Success.
func BuildMdSetEncryptedPairing() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "md", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "encrypted_pairing_request", Attrs: waBinary.Attrs{}},
		},
	}
}