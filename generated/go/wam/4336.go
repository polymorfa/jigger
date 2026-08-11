const WamMexEventV2 = 4336 // channel: regular

type MexEventV2Event struct {
	MexEventV2DurationMs string `wam:"mex_event_v2_duration_ms"` // field 1
	MexEventV2EndTime int64 `wam:"mex_event_v2_end_time"` // field 2
	MexEventV2ErrorCodes string `wam:"mex_event_v2_error_codes"` // field 3
	MexEventV2Errors string `wam:"mex_event_v2_errors"` // field 4
	MexEventV2HasData bool `wam:"mex_event_v2_has_data"` // field 5
	MexEventV2IsMex bool `wam:"mex_event_v2_is_mex"` // field 6
	MexEventV2OperationName string `wam:"mex_event_v2_operation_name"` // field 7
	MexEventV2QueryId string `wam:"mex_event_v2_query_id"` // field 8
	MexEventV2StartTime int64 `wam:"mex_event_v2_start_time"` // field 9
	MexEventV2IsArgoPayload bool `wam:"mex_event_v2_is_argo_payload"` // field 10
	MexFbUserType string `wam:"mex_fb_user_type"` // field 11
	MexEventV2ExperimentFlag int64 `wam:"mex_event_v2_experiment_flag"` // field 12
	TraceIdInt int64 `wam:"trace_id_int"` // field 13
}