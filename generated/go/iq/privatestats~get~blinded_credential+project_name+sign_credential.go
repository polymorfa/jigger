// BuildPrivatestatsSignCredential builds <iq type="get" xmlns="privatestats">. Replies with one of: Success, ErrorNoRetry, ErrorRetry.
func BuildPrivatestatsSignCredential() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "privatestats", "type": "get", "to": "s.whatsapp.net"},
		Content: []waBinary.Node{
			{Tag: "sign_credential", Attrs: waBinary.Attrs{"version": "2"}},
		},
	}
}