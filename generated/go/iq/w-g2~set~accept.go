// BuildGroupsAcceptGroupAdd builds <iq type="set" xmlns="w:g2">. Replies with one of: GroupJoinRequestSuccess, Success, ClientError, ServerError.
func BuildGroupsAcceptGroupAdd(to types.JID, to types.JID, code string, expiration int, admin types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "accept", Attrs: waBinary.Attrs{"code": code, "expiration": expiration, "admin": admin}},
		},
	}
}