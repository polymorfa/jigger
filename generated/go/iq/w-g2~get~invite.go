// BuildGroupsGetInviteGroupInfo builds <iq type="get" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
func BuildGroupsGetInviteGroupInfo(to types.JID, to string, code string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "invite", Attrs: waBinary.Attrs{"code": code}},
		},
	}
}