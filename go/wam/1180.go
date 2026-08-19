const WamStatusReply = 1180 // channel: regular

type StatusReplyEvent struct {
	StatusSessionId int64 `wam:"status_session_id"` // field 1
	StatusReplyResult STATUSREPLYRESULT `wam:"status_reply_result"` // field 2
	StatusReplyMessageType STATUSREPLYMESSAGETYPE `wam:"status_reply_message_type"` // field 3
	IsPosterBiz bool `wam:"is_poster_biz"` // field 4
	IsPosterInAddressBook bool `wam:"is_poster_in_address_book"` // field 6
	IsMentioned bool `wam:"is_mentioned"` // field 7
	StatusContentType STATUSCONTENTTYPE `wam:"status_content_type"` // field 8
	IsReplyBarBelowCanvas bool `wam:"is_reply_bar_below_canvas"` // field 9
	IsReplyBarOverMedia bool `wam:"is_reply_bar_over_media"` // field 10
	MediaHeight int64 `wam:"media_height"` // field 11
	MediaWidth int64 `wam:"media_width"` // field 12
	ReplyEntryMethod REPLYENTRYMETHOD `wam:"reply_entry_method"` // field 13
	ReplyExitMethod REPLYEXITMETHOD `wam:"reply_exit_method"` // field 14
	PostContainedPrompt bool `wam:"post_contained_prompt"` // field 15
	IsRecentQuickReplyUsed bool `wam:"is_recent_quick_reply_used"` // field 16
	StatusCategory STATUSCATEGORY `wam:"status_category"` // field 17
	IsSubscribed bool `wam:"is_subscribed"` // field 19
	MessageSendResult MESSAGESENDRESULTTYPE `wam:"message_send_result"` // field 20
	UnifiedSessionId string `wam:"unified_session_id"` // field 21
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 22
	StatusId string `wam:"status_id"` // field 23
	StatusViewerSessionId int64 `wam:"status_viewer_session_id"` // field 24
	StatusPosterContactType STATUSPOSTERCONTACTTYPE `wam:"status_poster_contact_type"` // field 25
	QuickReplySource QUICKREPLYSOURCE `wam:"quick_reply_source"` // field 26
}