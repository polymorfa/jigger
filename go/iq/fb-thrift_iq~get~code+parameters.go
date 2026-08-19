// BuildBizCtwaAdAccountGetAccessTokenAndSessionCookies builds <iq type="get" xmlns="fb:thrift_iq">. Replies with one of: Success, TooManyAttempts, IncorrectNonce, Error.
func BuildBizCtwaAdAccountGetAccessTokenAndSessionCookies(smaxId int, from types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "fb:thrift_iq", "smax_id": smaxId, "from": from, "to": "s.whatsapp.net", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "parameters", Attrs: waBinary.Attrs{}},
		},
	}
}