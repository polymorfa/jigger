// BuildPsaChatBlockSet builds <iq type="set" xmlns="w:comms:chat">. Replies with one of: Success, ServerError.
func BuildPsaChatBlockSet(action string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "w:comms:chat", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "blocking", Attrs: waBinary.Attrs{"action": action}},
		},
	}
}