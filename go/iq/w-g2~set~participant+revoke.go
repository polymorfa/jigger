// BuildGroupsRevokeRequestCode builds <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
func BuildGroupsRevokeRequestCode(to types.JID, to types.JID, jid types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "revoke", Attrs: waBinary.Attrs{}},
		},
	}
}