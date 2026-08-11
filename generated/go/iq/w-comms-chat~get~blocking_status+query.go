// BuildPsaChatBlockGet builds <iq type="get" xmlns="w:comms:chat">. Replies with one of: Success, ServerError.
func BuildPsaChatBlockGet() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "w:comms:chat", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "query", Attrs: waBinary.Attrs{}},
		},
	}
}