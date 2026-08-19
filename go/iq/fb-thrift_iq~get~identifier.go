// BuildBizLinkingGetAccountNonce builds <iq type="get" xmlns="fb:thrift_iq">. Replies with one of: Success, Error.
func BuildBizLinkingGetAccountNonce(smaxId int, from types.JID, scope string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "fb:thrift_iq", "smax_id": smaxId, "from": from, "to": "s.whatsapp.net", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "identifier", Attrs: waBinary.Attrs{"scope": scope}}, // optional
		},
	}
}