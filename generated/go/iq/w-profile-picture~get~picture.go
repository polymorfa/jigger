// BuildProfilePictureGet builds <iq type="get" xmlns="w:profile:picture">. Replies with one of: SuccessPictureURL, SuccessAvatarURLs, SuccessPictureBlob, SuccessNoData, Error.
func BuildProfilePictureGet(target types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "w:profile:picture", "target": target, "type": "get", "to": "s.whatsapp.net"},
	}
}