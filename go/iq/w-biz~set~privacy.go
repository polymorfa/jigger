// BuildBizSettingsSetPrivacySetting builds <iq type="set" xmlns="w:biz">. Replies with one of: Success, Error.
func BuildBizSettingsSetPrivacySetting(smaxId int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "w:biz", "to": "s.whatsapp.net", "smax_id": smaxId, "type": "set"},
	}
}