// BuildMdCompanionFinish builds <iq type="set" xmlns="md">. Replies with one of: Success, Error.
func BuildMdCompanionFinish(jid types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "md", "to": "s.whatsapp.net", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "link_code_companion_reg", Attrs: waBinary.Attrs{"jid": jid, "stage": "companion_finish"}},
		},
	}
}