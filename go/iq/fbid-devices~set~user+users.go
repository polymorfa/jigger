// BuildDevicesNotify builds <iq type="set" xmlns="fbid:devices">. Replies with one of: Success, Error.
func BuildDevicesNotify(jid types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "fbid:devices", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "users", Attrs: waBinary.Attrs{}},
		},
	}
}