const WamGroupHistorySenderUserJourney = 8378 // channel: regular

type GroupHistorySenderUserJourneyEvent struct {
	BundleSendSource BUNDLESENDSOURCE `wam:"bundle_send_source"` // field 1
	GroupHistoryMessagesCount int64 `wam:"group_history_messages_count"` // field 2
	GroupHistoryOutWindowPinsCount int64 `wam:"group_history_out_window_pins_count"` // field 3
	GroupHistoryPinsCount int64 `wam:"group_history_pins_count"` // field 4
	GroupHistorySenderActionType GROUPHISTORYSENDERACTIONTYPE `wam:"group_history_sender_action_type"` // field 5
	GroupHistorySystemMessageType GROUPHISTORYSYSTEMMESSAGETYPE `wam:"group_history_system_message_type"` // field 6
	GroupHistoryUncountedMessagesCount int64 `wam:"group_history_uncounted_messages_count"` // field 7
	GroupSize int64 `wam:"group_size"` // field 8
	IneligibleReason GROUPHISTORYINELIGIBILITYREASON `wam:"ineligible_reason"` // field 9
	RecipientCount int64 `wam:"recipient_count"` // field 10
	UiSurface TSSURFACE `wam:"ui_surface"` // field 11
	UnifiedSessionId string `wam:"unified_session_id"` // field 12
	UserJourneyTs int64 `wam:"user_journey_ts"` // field 13
	IsTeeBotNoticeOnly bool `wam:"is_tee_bot_notice_only"` // field 14
	IsGroupHistoryToggledOn bool `wam:"is_group_history_toggled_on"` // field 15
	XIneligibleReasons string `wam:"x_ineligible_reasons"` // field 16
}