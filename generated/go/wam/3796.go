const WamNotificationEngagement = 3796 // channel: regular

type NotificationEngagementEvent struct {
	AvgNotifEngagementT string `wam:"avg_notif_engagement_t"` // field 1
	GroupSizeBucket CLIENTGROUPSIZEBUCKET `wam:"group_size_bucket"` // field 2
	GroupTypeClient GROUPTYPECLIENT `wam:"group_type_client"` // field 3
	IsAGroup bool `wam:"is_a_group"` // field 4
	ThreadId string `wam:"thread_id"` // field 5
	TotalNotifMarkAsRead int64 `wam:"total_notif_mark_as_read"` // field 6
	TotalNotifMissedCallVoipCallback int64 `wam:"total_notif_missed_call_voip_callback"` // field 7
	TotalNotifMissedCallVoipMessage int64 `wam:"total_notif_missed_call_voip_message"` // field 8
	TotalNotifOthers int64 `wam:"total_notif_others"` // field 9
	TotalNotifReply int64 `wam:"total_notif_reply"` // field 10
	TotalNotifRtcVoipAccept int64 `wam:"total_notif_rtc_voip_accept"` // field 11
	TotalNotifRtcVoipDecline int64 `wam:"total_notif_rtc_voip_decline"` // field 12
	TotalNotifShowPreview int64 `wam:"total_notif_show_preview"` // field 13
	TotalNotifShown int64 `wam:"total_notif_shown"` // field 14
	TotalNotifTapToOpen int64 `wam:"total_notif_tap_to_open"` // field 15
	TotalMessageReminderNotifShown int64 `wam:"total_message_reminder_notif_shown"` // field 16
	TotalMessageReminderNotifTapToOpen int64 `wam:"total_message_reminder_notif_tap_to_open"` // field 17
	IsWebBackgroundSyncNotif bool `wam:"is_web_background_sync_notif"` // field 18
	TotalLinkReshareMessageNotifShown int64 `wam:"total_link_reshare_message_notif_shown"` // field 19
	TotalLinkReshareMessageNotifTapToOpen int64 `wam:"total_link_reshare_message_notif_tap_to_open"` // field 20
	TotalLinkReshareMessageNotifShownFb int64 `wam:"total_link_reshare_message_notif_shown_fb"` // field 21
	TotalLinkReshareMessageNotifShownIg int64 `wam:"total_link_reshare_message_notif_shown_ig"` // field 22
	TotalLinkReshareMessageNotifTapToOpenFb int64 `wam:"total_link_reshare_message_notif_tap_to_open_fb"` // field 23
	TotalLinkReshareMessageNotifTapToOpenIg int64 `wam:"total_link_reshare_message_notif_tap_to_open_ig"` // field 24
}