// BuildAccountSetPaymentsTOSv3 builds <iq type="set" xmlns="urn:xmpp:whatsapp:account">. Replies with one of: Success, Error.
func BuildAccountSetPaymentsTOSv3(tosVersion int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "urn:xmpp:whatsapp:account", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "accept_pay", Attrs: waBinary.Attrs{"version": "3", "tos_version": tosVersion}},
		},
	}
}