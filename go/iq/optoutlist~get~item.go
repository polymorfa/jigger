// BuildBlocklistsGetOptOutList builds <iq type="get" xmlns="optoutlist">. Replies with one of: SuccessWithMismatch, SuccessWithMatch, InvalidRequest, InternalServerError.
func BuildBlocklistsGetOptOutList(category string, dhash string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "optoutlist", "type": "get", "category": category},
		Content: []waBinary.Node{
			{Tag: "item", Attrs: waBinary.Attrs{"dhash": dhash}}, // optional
		},
	}
}