// BuildDevicesRemove builds <iq type="set" xmlns="fbid:devices">. Replies with one of: Success, Error.
func BuildDevicesRemove(id int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "fbid:devices", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "remove", Attrs: waBinary.Attrs{"id": id}},
		},
	}
}