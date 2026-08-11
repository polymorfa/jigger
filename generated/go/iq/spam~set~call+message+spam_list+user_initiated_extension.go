// BuildSpamIndividualReport builds <iq type="set" xmlns="spam">. Replies with one of: Success, Error.
func BuildSpamIndividualReport(to types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"type": "set", "xmlns": "spam", "to": to},
	}
}