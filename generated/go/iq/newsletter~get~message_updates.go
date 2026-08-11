// BuildNewslettersGetNewsletterMessageUpdates builds <iq type="get" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError.
func BuildNewslettersGetNewsletterMessageUpdates(to types.JID, to types.JID, count int, since int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "newsletter", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "message_updates", Attrs: waBinary.Attrs{"count": count, "since": since}},
		},
	}
}