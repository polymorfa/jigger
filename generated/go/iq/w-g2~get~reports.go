// BuildGroupsGetReportedMessages builds <iq type="get" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
func BuildGroupsGetReportedMessages(to types.JID, to types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "reports", Attrs: waBinary.Attrs{}},
		},
	}
}