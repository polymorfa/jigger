const WamWebcMinorEventLog = 5440 // channel: regular

type WebcMinorEventLogEvent struct {
	AdditionalDebugContext string `wam:"additional_debug_context"` // field 1
	LogContext string `wam:"log_context"` // field 2
	LogCount int64 `wam:"log_count"` // field 3
	LogReason string `wam:"log_reason"` // field 4
	LogType LOGTYPE `wam:"log_type"` // field 5
}