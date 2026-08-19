// BuildUserNoticeSet builds <iq type="set" xmlns="tos">.
func BuildUserNoticeSet() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "tos", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "notice", Attrs: waBinary.Attrs{}},
		},
	}
}