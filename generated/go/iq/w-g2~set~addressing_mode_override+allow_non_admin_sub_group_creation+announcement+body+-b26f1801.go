// BuildGroupsCreate builds <iq type="set" xmlns="w:g2">. Replies with one of: Success, GroupAlreadyExists, ClientError, ServerError.
func BuildGroupsCreate(to types.JID, to string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "set"},
	}
}