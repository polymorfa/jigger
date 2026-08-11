// BuildBizSettingsGetPrivacySetting builds <iq type="get" xmlns="w:biz">. Replies with one of: Success, Error.
func BuildBizSettingsGetPrivacySetting(smaxId int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "w:biz", "to": "s.whatsapp.net", "smax_id": smaxId, "type": "get"},
		Content: []waBinary.Node{
			{Tag: "privacy", Attrs: waBinary.Attrs{}},
		},
	}
}