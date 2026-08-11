const WamUserNotice = 2472 // channel: regular

type UserNoticeEvent struct {
	UserNoticeId int64 `wam:"user_notice_id"` // field 1
	UserNoticeContentVersion int64 `wam:"user_notice_content_version"` // field 2
	UserNoticeEvent USERNOTICEEVENT `wam:"user_notice_event"` // field 3
	NoticeType NOTICETYPE `wam:"notice_type"` // field 4
	NoticeTriggeredBy NOTICETRIGGEREDBY `wam:"notice_triggered_by"` // field 5
	TsMs string `wam:"ts_ms"` // field 6
}