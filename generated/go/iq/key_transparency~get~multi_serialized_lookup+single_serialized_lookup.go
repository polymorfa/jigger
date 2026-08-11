// BuildKeyTransparencyMultiSerializedLookup builds <iq type="get" xmlns="key_transparency">. Replies with one of: Success, Error.
func BuildKeyTransparencyMultiSerializedLookup(version string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "key_transparency", "to": "s.whatsapp.net", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "multi_serialized_lookup", Attrs: waBinary.Attrs{"version": version}},
			{Tag: "single_serialized_lookup", Attrs: waBinary.Attrs{}}, // repeated
		},
	}
}