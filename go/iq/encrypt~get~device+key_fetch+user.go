// BuildPreKeysFetchMissingPreKeys builds <iq type="get" xmlns="encrypt">. Replies with one of: Success, RequestError, ServerError.
func BuildPreKeysFetchMissingPreKeys(contextJid types.JID, jid types.JID, id int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"type": "get", "xmlns": "encrypt", "to": "s.whatsapp.net"},
		Content: []waBinary.Node{
			{Tag: "key_fetch", Attrs: waBinary.Attrs{"pqsupport": "true", "context_jid": contextJid}},
		},
	}
}