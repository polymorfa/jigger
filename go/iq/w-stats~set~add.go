// BuildStatsSendBuffer builds <iq type="set" xmlns="w:stats">. Replies with one of: Success, ErrorNoRetry, ErrorRetry.
func BuildStatsSendBuffer(t int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "w:stats", "to": "s.whatsapp.net", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "add", Attrs: waBinary.Attrs{"t": t}},
		},
	}
}