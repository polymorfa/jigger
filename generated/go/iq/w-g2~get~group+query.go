// BuildGroupsBatchGetGroupInfo builds <iq type="get" xmlns="w:g2">. Replies with one of: Success, ClientError, ServerError.
func BuildGroupsBatchGetGroupInfo(to types.JID, to string, context string, jid types.JID) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": to, "xmlns": "w:g2", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "query", Attrs: waBinary.Attrs{"context": context}},
		},
	}
}