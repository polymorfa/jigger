// BuildGroupsSetDescription builds <iq type="set" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
func BuildGroupsSetDescription(to types.JID, to types.JID, id string, prev string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "description", Attrs: waBinary.Attrs{"id": id, "prev": prev, "delete": "true"}},
		},
	}
}