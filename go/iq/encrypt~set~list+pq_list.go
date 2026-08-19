// BuildPreKeysDelete builds <iq type="set" xmlns="encrypt">. Replies with one of: Success, RequestError, ServerError.
func BuildPreKeysDelete() waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"type": "set", "xmlns": "encrypt", "to": "s.whatsapp.net"},
		Content: []waBinary.Node{
			{Tag: "list", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "pq_list", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "op", Attrs: waBinary.Attrs{"mode": "delete"}},
		},
	}
}