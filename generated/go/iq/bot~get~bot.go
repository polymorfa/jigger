// BuildBotBotList builds <iq type="get" xmlns="bot">. Replies with one of: SuccessV2, SuccessV3, Error.
func BuildBotBotList(v string, bhash string, jid types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "bot", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "bot", Attrs: waBinary.Attrs{"v": v, "bhash": bhash}},
		},
	}
}