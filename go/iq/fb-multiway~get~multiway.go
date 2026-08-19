// BuildMultiwaydMultiway builds <iq type="get" xmlns="fb:multiway">. Replies with one of: Success, Error.
func BuildMultiwaydMultiway(flowId string, binaryVersion int, conferenceName string, serverInfoData string, transactionId int, messageType string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"to": "s.whatsapp.net", "xmlns": "fb:multiway", "type": "get"},
		Content: []waBinary.Node{
			{Tag: "multiway", Attrs: waBinary.Attrs{"flow_id": flowId, "binary_version": binaryVersion, "conference_name": conferenceName, "server_info_data": serverInfoData, "transaction_id": transactionId, "message_type": messageType}},
		},
	}
}