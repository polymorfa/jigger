// BuildGroupsPromoteDemote builds <iq type="set" xmlns="w:g2">. Replies with one of: SuccessPromote, SuccessDemote, ClientError, ServerError.
func BuildGroupsPromoteDemote(to types.JID, to types.JID, jid types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "promote", Attrs: waBinary.Attrs{}}, // optional
			{Tag: "demote", Attrs: waBinary.Attrs{}}, // optional
		},
	}
}