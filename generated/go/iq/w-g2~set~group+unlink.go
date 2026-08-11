// BuildGroupsUnlinkGroups builds <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
func BuildGroupsUnlinkGroups(to types.JID, to types.JID, jid types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "unlink", Attrs: waBinary.Attrs{"unlink_type": "sub_group"}},
		},
	}
}