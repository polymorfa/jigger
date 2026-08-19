// BuildWaffleGenerateAccessTokens builds <iq type="get" xmlns="waffle">. Replies with one of: Success, Error.
func BuildWaffleGenerateAccessTokens(smaxId int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "waffle", "smax_id": smaxId, "to": "s.whatsapp.net", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "encryption_metadata", Attrs: waBinary.Attrs{}},
			{Tag: "timestamp", Attrs: waBinary.Attrs{}},
			{Tag: "fbid", Attrs: waBinary.Attrs{}},
			{Tag: "id_sign", Attrs: waBinary.Attrs{}},
		},
	}
}