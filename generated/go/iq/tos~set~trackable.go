// BuildUserNoticeSetResult builds <iq type="set" xmlns="tos">.
func BuildUserNoticeSetResult(id int, result int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "tos", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "trackable", Attrs: waBinary.Attrs{"id": id, "result": result}},
		},
	}
}