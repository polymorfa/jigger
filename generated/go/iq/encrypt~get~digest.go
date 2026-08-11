// BuildPreKeysFetchDigest builds <iq type="get" xmlns="encrypt">. Replies with one of: Success, RequestError, ServerError.
func BuildPreKeysFetchDigest() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"type": "get", "xmlns": "encrypt", "to": "s.whatsapp.net"},
		Content: []waBinary.Node{
			{Tag: "digest", Attrs: waBinary.Attrs{}},
		},
	}
}