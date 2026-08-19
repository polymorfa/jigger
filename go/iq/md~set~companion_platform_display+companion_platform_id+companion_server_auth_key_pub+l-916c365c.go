// BuildMdCompanionHello builds <iq type="set" xmlns="md">. Replies with one of: NotifyCompanion, Error.
func BuildMdCompanionHello(jid types.JID, shouldShowPushNotification string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "md", "to": "s.whatsapp.net", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "link_code_companion_reg", Attrs: waBinary.Attrs{"jid": jid, "stage": "companion_hello", "should_show_push_notification": shouldShowPushNotification}},
		},
	}
}