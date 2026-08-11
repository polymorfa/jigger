// BuildPassiveModePassiveIQ builds <iq type="set" xmlns="passive">. Replies with one of: Success.
func BuildPassiveModePassiveIQ() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"type": "set", "xmlns": "passive", "to": "s.whatsapp.net"},
		Content: []waBinary.Node{
			{Tag: "passive", Attrs: waBinary.Attrs{}},
		},
	}
}