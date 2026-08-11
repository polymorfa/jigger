// BuildPrivacyGetContactBlacklist builds <iq type="get" xmlns="privacy">. Replies with one of: SuccessLID, Success, Error.
func BuildPrivacyGetContactBlacklist() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "privacy", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "privacy", Attrs: waBinary.Attrs{}},
		},
	}
}