// BuildBlocklistsUpdateOptOutList builds <iq type="set" xmlns="optoutlist">. Replies with one of: SuccessWithMatch, SuccessWithMismatch, InvalidRequest, ServerError.
func BuildBlocklistsUpdateOptOutList(jid types.JID, category string, action string, dhash string, reason string, entryPoint string, signupId string, duration int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "optoutlist", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "item", Attrs: waBinary.Attrs{"jid": jid, "category": category, "action": action, "dhash": dhash, "reason": reason, "entry_point": entryPoint, "signup_id": signupId, "duration": duration}},
		},
	}
}