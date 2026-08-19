// BuildPreKeysRotateSigned builds <iq type="unknown" xmlns="encrypt">. Replies with one of: Success, ValidationError, RequestError, ServerError.
func BuildPreKeysRotateSigned(to types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"type": "unknown", "xmlns": "encrypt", "to": to},
	}
}