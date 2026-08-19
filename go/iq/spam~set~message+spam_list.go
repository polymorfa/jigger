// BuildSpamNewsletterReport builds <iq type="set" xmlns="spam">. Replies with one of: Success, Error.
func BuildSpamNewsletterReport(jid types.JID, spamFlow string, subject string, from types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"type": "set", "to": "s.whatsapp.net", "xmlns": "spam"},
		Content: []waBinary.Node{
			{Tag: "spam_list", Attrs: waBinary.Attrs{"jid": jid, "spam_flow": spamFlow, "subject": subject}},
		},
	}
}