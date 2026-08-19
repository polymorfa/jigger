const WamEphemeralSyncResponseReceive = 4780 // channel: regular

type EphemeralSyncResponseReceiveEvent struct {
	ClientDisappearingModeInitiator DISAPPEARINGCHATINITIATORTYPE `wam:"client_disappearing_mode_initiator"` // field 1
	ClientEphemeralityDuration int64 `wam:"client_ephemerality_duration"` // field 2
	ClientEphemeralityInitiator EPHEMERALITYINITIATORTYPE `wam:"client_ephemerality_initiator"` // field 3
	ClientEphemeralitySettingTimestamp int64 `wam:"client_ephemerality_setting_timestamp"` // field 4
	ClientEphemeralityTriggerAction EPHEMERALITYTRIGGERACTIONTYPE `wam:"client_ephemerality_trigger_action"` // field 5
	EsrDisappearingModeInitiator DISAPPEARINGCHATINITIATORTYPE `wam:"esr_disappearing_mode_initiator"` // field 6
	EsrEphemeralityDuration int64 `wam:"esr_ephemerality_duration"` // field 7
	EsrEphemeralityInitiator EPHEMERALITYINITIATORTYPE `wam:"esr_ephemerality_initiator"` // field 8
	EsrEphemeralitySettingTimestamp int64 `wam:"esr_ephemerality_setting_timestamp"` // field 9
	EsrEphemeralityTriggerAction EPHEMERALITYTRIGGERACTIONTYPE `wam:"esr_ephemerality_trigger_action"` // field 10
	EsrFailureReason ESRFAILUREREASONTYPE `wam:"esr_failure_reason"` // field 11
	EsrResolveResult ESRSENDRESULTTYPE `wam:"esr_resolve_result"` // field 12
	IsAGroup bool `wam:"is_a_group"` // field 13
	ThreadId string `wam:"thread_id"` // field 14
}