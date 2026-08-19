// BuildDevicesFetch builds <iq type="get" xmlns="fbid:devices">. Replies with one of: Success, Error.
func BuildDevicesFetch() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "fbid:devices", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "users", Attrs: waBinary.Attrs{}},
		},
	}
}