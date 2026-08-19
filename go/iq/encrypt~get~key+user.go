// BuildPreKeysFetchKeyBundles builds <iq type="get" xmlns="encrypt">. Replies with one of: Success, RequestError, ServerError.
func BuildPreKeysFetchKeyBundles(contextJid types.JID, jid types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"type": "get", "xmlns": "encrypt", "to": "s.whatsapp.net"},
		Content: []waBinary.Node{
			{Tag: "key", Attrs: waBinary.Attrs{"pqsupport": "true", "context_jid": contextJid}},
		},
	}
}