// BuildGroupsGetParticipatingGroups builds <iq type="get" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
func BuildGroupsGetParticipatingGroups(to types.JID, to string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "participating", Attrs: waBinary.Attrs{}},
		},
	}
}