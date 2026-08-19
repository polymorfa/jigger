// BuildGroupsJoinLinkedGroup builds <iq type="set" xmlns="w:g2">. Replies with one of: GroupJoinRequestSuccess, Success, ClientError, ServerError.
func BuildGroupsJoinLinkedGroup(to types.JID, to types.JID, type string, jid types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "join_linked_group", Attrs: waBinary.Attrs{"type": type, "jid": jid}},
		},
	}
}