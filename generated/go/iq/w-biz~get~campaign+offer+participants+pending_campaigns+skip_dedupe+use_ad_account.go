// BuildSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckout builds <iq type="get" xmlns="w:biz">. Replies with one of: Success, Error.
func BuildSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckout(smaxId int, from types.JID, id string, freeReservedMsgs int, sendTimestamp int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "w:biz", "smax_id": smaxId, "from": from, "to": "s.whatsapp.net", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "participants", Attrs: waBinary.Attrs{}},
			{Tag: "use_ad_account", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "skip_dedupe", Attrs: waBinary.Attrs{}}, // repeated
			{Tag: "offer", Attrs: waBinary.Attrs{"id": id}}, // optional
			{Tag: "pending_campaigns", Attrs: waBinary.Attrs{}}, // optional
		},
	}
}