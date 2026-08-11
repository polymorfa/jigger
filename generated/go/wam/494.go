const WamCrashLog = 494 // channel: regular

type CrashLogEvent struct {
	CrashReason string `wam:"crash_reason"` // field 2
	CrashContext string `wam:"crash_context"` // field 3
	CrashCount int64 `wam:"crash_count"` // field 5
	CrashType CRASHTYPE `wam:"crash_type"` // field 6
	RunningTasks string `wam:"running_tasks"` // field 16
	ProcessIdentifier int64 `wam:"process_identifier"` // field 18
	PeripheralConnected string `wam:"peripheral_connected"` // field 19
	ActiveSubfunnelId string `wam:"active_subfunnel_id"` // field 20
	ActiveSubfunnelType SUBFUNNELTYPE `wam:"active_subfunnel_type"` // field 21
	ChatSessionId string `wam:"chat_session_id"` // field 22
	CrashApplicationState CRASHAPPLICATIONSTATE `wam:"crash_application_state"` // field 23
	CrashTimeout int64 `wam:"crash_timeout"` // field 24
	UnifiedSessionId string `wam:"unified_session_id"` // field 25
	IphoneTimeSpentSurfaceId TSSURFACE `wam:"iphone_time_spent_surface_id"` // field 26
	CrashLogTimeSpentViewName string `wam:"crash_log_time_spent_view_name"` // field 27
	CrashLogProductArea PRODUCTAREA `wam:"crash_log_product_area"` // field 28
	UfadReportType UFADREPORTTYPE `wam:"ufad_report_type"` // field 29
	IphoneProcessNonGlobal IPHONEPROCESSNONGLOBAL `wam:"iphone_process_non_global"` // field 30
	LowPowerModeEnabled bool `wam:"low_power_mode_enabled"` // field 31
	AppContext string `wam:"app_context"` // field 32
	AppContextBitfield int64 `wam:"app_context_bitfield"` // field 33
	CallTestBucketIdList string `wam:"call_test_bucket_id_list"` // field 34
	TraceIdInt int64 `wam:"trace_id_int"` // field 35
	CrashLogSasEnabled bool `wam:"crash_log_sas_enabled"` // field 36
}