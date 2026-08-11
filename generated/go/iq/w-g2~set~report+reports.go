// BuildGroupsReportMessages builds <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
func BuildGroupsReportMessages(to types.JID, to types.JID, messageId string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "reports", Attrs: waBinary.Attrs{}},
		},
	}
}