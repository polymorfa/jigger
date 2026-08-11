const WamMarketingMessageUserControlsJourney = 6070 // channel: private

type MarketingMessageUserControlsJourneyEvent struct {
	IsSuccess bool `wam:"is_success"` // field 1
	MmUserControlsAction MMUSERCONTROLSACTION `wam:"mm_user_controls_action"` // field 2
	MmUserControlsEntryPoint MMUSERCONTROLSENTRYPOINT `wam:"mm_user_controls_entry_point"` // field 3
	MmUserControlsErrorType string `wam:"mm_user_controls_error_type"` // field 4
	MmUserControlsRolloutVariant int64 `wam:"mm_user_controls_rollout_variant"` // field 5
	SequenceNumber int64 `wam:"sequence_number"` // field 6
	TemplateId string `wam:"template_id"` // field 7
	UnifiedSessionId string `wam:"unified_session_id"` // field 8
	BusinessPhoneNumber int64 `wam:"business_phone_number"` // field 9
	StopDuration string `wam:"stop_duration"` // field 10
}