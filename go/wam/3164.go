const WamMdBootstrapAppStateCriticalDataProcessing = 3164 // channel: regular

type MdBootstrapAppStateCriticalDataProcessingEvent struct {
	BootstrapAppStateDataStage BOOTSTRAPAPPSTATEDATASTAGECODE `wam:"bootstrap_app_state_data_stage"` // field 1
	MdBootstrapPayloadType MDBOOTSTRAPPAYLOADTYPE `wam:"md_bootstrap_payload_type"` // field 2
	MdRegAttemptId string `wam:"md_reg_attempt_id"` // field 3
	MdSessionId string `wam:"md_session_id"` // field 4
	MdTimestamp int64 `wam:"md_timestamp"` // field 5
}