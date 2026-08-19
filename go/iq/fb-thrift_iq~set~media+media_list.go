// BuildBizCtwaNativeAdUploadAdMedia builds <iq type="set" xmlns="fb:thrift_iq">. Replies with one of: Success, Error.
func BuildBizCtwaNativeAdUploadAdMedia(smaxId int, from types.JID, id string, type string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "fb:thrift_iq", "smax_id": smaxId, "from": from, "to": "s.whatsapp.net", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "media", Attrs: waBinary.Attrs{"id": id, "type": type}}, // optional
			{Tag: "media_list", Attrs: waBinary.Attrs{"id": id, "type": type}}, // repeated
		},
	}
}