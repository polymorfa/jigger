const WamThreadInteractionDataNotification = 6412 // channel: regular

type ThreadInteractionDataNotificationEvent struct {
	GroupSizeBucket CLIENTGROUPSIZEBUCKET `wam:"group_size_bucket"` // field 1
	GroupTypeClient GROUPTYPECLIENT `wam:"group_type_client"` // field 2
	IsAGroup bool `wam:"is_a_group"` // field 3
	ThreadDs string `wam:"thread_ds"` // field 4
	TotalLinkReshareMessageNotifShown int64 `wam:"total_link_reshare_message_notif_shown"` // field 6
	TotalLinkReshareMessageNotifShownFb int64 `wam:"total_link_reshare_message_notif_shown_fb"` // field 7
	TotalLinkReshareMessageNotifShownIg int64 `wam:"total_link_reshare_message_notif_shown_ig"` // field 8
	TotalLinkReshareMessageNotifTapToOpen int64 `wam:"total_link_reshare_message_notif_tap_to_open"` // field 9
	TotalLinkReshareMessageNotifTapToOpenFb int64 `wam:"total_link_reshare_message_notif_tap_to_open_fb"` // field 10
	TotalLinkReshareMessageNotifTapToOpenIg int64 `wam:"total_link_reshare_message_notif_tap_to_open_ig"` // field 11
	TotalMessageReminderNotifShown int64 `wam:"total_message_reminder_notif_shown"` // field 12
	TotalMessageReminderNotifTapToOpen int64 `wam:"total_message_reminder_notif_tap_to_open"` // field 13
	TotalNotifMarkAsRead int64 `wam:"total_notif_mark_as_read"` // field 14
	TotalNotifMissedCallVoipCallback int64 `wam:"total_notif_missed_call_voip_callback"` // field 15
	TotalNotifMissedCallVoipMessage int64 `wam:"total_notif_missed_call_voip_message"` // field 16
	TotalNotifOthers int64 `wam:"total_notif_others"` // field 17
	TotalNotifReply int64 `wam:"total_notif_reply"` // field 18
	TotalNotifRtcVoipAccept int64 `wam:"total_notif_rtc_voip_accept"` // field 19
	TotalNotifRtcVoipDecline int64 `wam:"total_notif_rtc_voip_decline"` // field 20
	TotalNotifShowPreview int64 `wam:"total_notif_show_preview"` // field 21
	TotalNotifShown int64 `wam:"total_notif_shown"` // field 22
	TotalNotifTapToOpen int64 `wam:"total_notif_tap_to_open"` // field 23
	ThreadId string `wam:"thread_id"` // field 24
	ThreadIdByLid string `wam:"thread_id_by_lid"` // field 25
	ThreadCreationDate string `wam:"thread_creation_date"` // field 26
}