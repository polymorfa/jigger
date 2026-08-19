// BuildMdGetPasskeyRequestOptions builds <iq type="get" xmlns="md">. Replies with one of: Success, Error.
func BuildMdGetPasskeyRequestOptions() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "md", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "passkey_request_options", Attrs: waBinary.Attrs{}},
		},
	}
}