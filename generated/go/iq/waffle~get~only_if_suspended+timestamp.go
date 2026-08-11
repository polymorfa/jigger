// BuildWaffleForceDeleteState builds <iq type="get" xmlns="waffle">. Replies with one of: Success, Error.
func BuildWaffleForceDeleteState(smaxId int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "waffle", "smax_id": smaxId, "to": "s.whatsapp.net", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "timestamp", Attrs: waBinary.Attrs{}},
			{Tag: "only_if_suspended", Attrs: waBinary.Attrs{}}, // optional
		},
	}
}