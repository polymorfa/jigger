// BuildUserNoticeGetDisclosures builds <iq type="get" xmlns="tos">. Replies with one of: ClientSuccess, ClientError, ServerError.
func BuildUserNoticeGetDisclosures(t int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "tos", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "get_user_disclosures", Attrs: waBinary.Attrs{"t": t}},
		},
	}
}