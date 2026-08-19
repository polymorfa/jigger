// BuildNewslettersGetNewsletterStatusUpdates builds <iq type="get" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError.
func BuildNewslettersGetNewsletterStatusUpdates(to types.JID, to types.JID, count int, since int) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "newsletter", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "status_updates", Attrs: waBinary.Attrs{"count": count, "since": since}},
		},
	}
}