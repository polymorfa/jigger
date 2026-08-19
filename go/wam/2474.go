const WamUserNoticeError = 2474 // channel: regular

type UserNoticeErrorEvent struct {
	UserNoticeId int64 `wam:"user_notice_id"` // field 1
	UserNoticeContentVersion int64 `wam:"user_notice_content_version"` // field 2
	UserNoticeErrorEvent USERNOTICEERROREVENT `wam:"user_notice_error_event"` // field 3
	NoticeType NOTICETYPE `wam:"notice_type"` // field 4
}