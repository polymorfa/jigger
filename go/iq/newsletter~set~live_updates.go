// BuildNewslettersSubscribeToLiveUpdates builds <iq type="set" xmlns="newsletter">. Replies with one of: Success, ClientError, ServerError.
func BuildNewslettersSubscribeToLiveUpdates(to types.JID, to types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "newsletter", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "live_updates", Attrs: waBinary.Attrs{}},
		},
	}
}