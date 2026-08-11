// BuildMdGetRef builds <iq type="get" xmlns="md">. Replies with one of: Success.
func BuildMdGetRef() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "md", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "ref", Attrs: waBinary.Attrs{}},
		},
	}
}