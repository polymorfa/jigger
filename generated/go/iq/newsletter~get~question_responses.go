// BuildNewslettersGetNewsletterResponses builds <iq type="get" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError.
func BuildNewslettersGetNewsletterResponses(to types.JID, to types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "newsletter", "type": "get"},
	}
}