// BuildBizLinkingGetLinkedAccounts builds <iq type="get" xmlns="fb:thrift_iq">. Replies with one of: Success, Forbidden, Error.
func BuildBizLinkingGetLinkedAccounts(smaxId int, from types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "fb:thrift_iq", "smax_id": smaxId, "from": from, "to": "s.whatsapp.net", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "linked_accounts", Attrs: waBinary.Attrs{}},
		},
	}
}