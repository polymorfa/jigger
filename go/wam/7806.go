const WamHatchUserJourney = 7806 // channel: regular

type HatchUserJourneyEvent struct {
	AiSessionId string `wam:"ai_session_id"` // field 1
	HatchActionType HATCHACTIONTYPE `wam:"hatch_action_type"` // field 3
	UnifiedSessionId string `wam:"unified_session_id"` // field 4
	RawBotEntryPoint string `wam:"raw_bot_entry_point"` // field 5
	HitlIsMulti bool `wam:"hitl_is_multi"` // field 6
}