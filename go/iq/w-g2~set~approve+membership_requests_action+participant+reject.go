// BuildGroupsMembershipRequestsAction builds <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
func BuildGroupsMembershipRequestsAction(to types.JID, to types.JID, jid types.JID, phoneNumber types.JID, username string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "membership_requests_action", Attrs: waBinary.Attrs{}},
		},
	}
}