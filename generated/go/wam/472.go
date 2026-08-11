const WamUiAction = 472 // channel: regular

type UiActionEvent struct {
	UiActionType UIACTIONTYPE `wam:"ui_action_type"` // field 1
	UiActionPreloaded bool `wam:"ui_action_preloaded"` // field 2
	UiActionT string `wam:"ui_action_t"` // field 3
	SizeBucket SIZEBUCKET `wam:"size_bucket"` // field 4
	DeviceCount int64 `wam:"device_count"` // field 5
	ParticipantCount int64 `wam:"participant_count"` // field 6
	UiActionChatType UIACTIONCHATTYPE `wam:"ui_action_chat_type"` // field 7
	IsLid bool `wam:"is_lid"` // field 8
	AgentEngagementType AGENTENGAGEMENTENUMTYPE `wam:"agent_engagement_type"` // field 9
	LocalAddressingMode ADDRESSINGMODE `wam:"local_addressing_mode"` // field 10
	BotType BOTTYPE `wam:"bot_type"` // field 11
	UiActionTtrcSurfaceName string `wam:"ui_action_ttrc_surface_name"` // field 12
	DbMainThreadCount int64 `wam:"db_main_thread_count"` // field 13
	DbReadsCount int64 `wam:"db_reads_count"` // field 14
	DbWritesCount int64 `wam:"db_writes_count"` // field 15
	PeripheralConnected string `wam:"peripheral_connected"` // field 16
	DbBgThreadReadsDurationT string `wam:"db_bg_thread_reads_duration_t"` // field 17
	DbBgThreadWritesDurationT string `wam:"db_bg_thread_writes_duration_t"` // field 18
	DbMainThreadReadsDurationT string `wam:"db_main_thread_reads_duration_t"` // field 19
	DbMainThreadWritesDurationT string `wam:"db_main_thread_writes_duration_t"` // field 20
	AppContext string `wam:"app_context"` // field 21
	AppContextBitfield int64 `wam:"app_context_bitfield"` // field 22
	IsLowPowerMode bool `wam:"is_low_power_mode"` // field 23
	UiActionPresentationSource string `wam:"ui_action_presentation_source"` // field 25
	AppSessionId string `wam:"app_session_id"` // field 26
	UnifiedSessionId string `wam:"unified_session_id"` // field 27
	TraceIdInt int64 `wam:"trace_id_int"` // field 28
	HasOpenAiParticipant bool `wam:"has_open_ai_participant"` // field 29
	HasTeeAiParticipant bool `wam:"has_tee_ai_participant"` // field 30
}