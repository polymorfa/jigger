// BuildBizMsgUserFeedbackUpdatePreference builds <iq type="set" xmlns="w:biz:msg_feedback">. Replies with one of: Success, InvalidRequest, ServerError.
func BuildBizMsgUserFeedbackUpdatePreference(action string, jid types.JID, feedback string) waBinary.Node {
	return waBinary.Node{
		Tag: "iq",
		Attrs: waBinary.Attrs{"xmlns": "w:biz:msg_feedback", "to": "s.whatsapp.net", "type": "set"},
		Content: []waBinary.Node{
			{Tag: "user_feedback", Attrs: waBinary.Attrs{"action": action, "jid": jid, "feedback": feedback}},
		},
	}
}