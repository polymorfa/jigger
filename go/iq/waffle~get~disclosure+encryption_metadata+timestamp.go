// BuildWaffleGenerateWAEntACUser builds <iq type="get" xmlns="waffle">. Replies with one of: Success, Error.
func BuildWaffleGenerateWAEntACUser(smaxId int, id int, version string, lg string, lc string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "waffle", "smax_id": smaxId, "to": "s.whatsapp.net", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "encryption_metadata", Attrs: waBinary.Attrs{}},
			{Tag: "timestamp", Attrs: waBinary.Attrs{}},
			{Tag: "disclosure", Attrs: waBinary.Attrs{"id": id, "version": version, "lg": lg, "lc": lc}},
		},
	}
}