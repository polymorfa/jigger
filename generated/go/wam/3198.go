const WamDeepLinkMsgSent = 3198 // channel: regular

type DeepLinkMsgSentEvent struct {
	DeepLinkAction DEEPLINKACTION `wam:"deep_link_action"` // field 1
	DeepLinkSessionId string `wam:"deep_link_session_id"` // field 2
}