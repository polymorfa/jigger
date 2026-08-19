const WamStatusCrosspostRequest = 4994 // channel: regular

type StatusCrosspostRequestEvent struct {
	CacSessionId string `wam:"cac_session_id"` // field 1
	CrosspostDestination CROSSPOSTDESTINATIONTYPE `wam:"crosspost_destination"` // field 2
	CrosspostErrorType string `wam:"crosspost_error_type"` // field 3
	CrosspostOrigin CROSSPOSTORIGINTYPE `wam:"crosspost_origin"` // field 4
	DefaultStatusPrivacySettings PRIVACYSETTINGSVALUETYPE `wam:"default_status_privacy_settings"` // field 5
	IsAutoCrosspostEnabledInSettings bool `wam:"is_auto_crosspost_enabled_in_settings"` // field 6
	IsAutoCrossposted bool `wam:"is_auto_crossposted"` // field 7
	StatusCrossPostPerPostStatusPrivacySetting PRIVACYSETTINGSVALUETYPE `wam:"status_cross_post_per_post_status_privacy_setting"` // field 8
	StatusCrosspostMediaType MEDIATYPE `wam:"status_crosspost_media_type"` // field 9
	StatusCrosspostResult CROSSPOSTRESULTTYPE `wam:"status_crosspost_result"` // field 10
	StatusId string `wam:"status_id"` // field 11
	StatusCrosspostEntryPoint string `wam:"status_crosspost_entry_point"` // field 12
	StatusCrosspostShareType STATUSCROSSPOSTSHARETYPEENUM `wam:"status_crosspost_share_type"` // field 13
	StatusCrosspostEventType string `wam:"status_crosspost_event_type"` // field 14
	StatusCrosspostFlowTraceId string `wam:"status_crosspost_flow_trace_id"` // field 15
	StatusCrosspostTraceId int64 `wam:"status_crosspost_trace_id"` // field 16
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 17
}