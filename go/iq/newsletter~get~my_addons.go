// BuildNewslettersMyAddOns builds <iq type="get" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError.
func BuildNewslettersMyAddOns(limit int, jid types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "newsletter", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "my_addons", Attrs: waBinary.Attrs{"limit": limit, "jid": jid}},
		},
	}
}