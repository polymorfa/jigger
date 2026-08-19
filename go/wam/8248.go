const WamWaffleCompanionStateLifecycle = 8248 // channel: regular

type WaffleCompanionStateLifecycleEvent struct {
	WaffleLifecycleElapsedMs int64 `wam:"waffle_lifecycle_elapsed_ms"` // field 1
	WaffleLifecycleErrorAction WAFFLELIFECYCLEERRORACTIONTYPE `wam:"waffle_lifecycle_error_action"` // field 2
	WaffleLifecycleErrorCode WAFFLELIFECYCLEERRORCODETYPE `wam:"waffle_lifecycle_error_code"` // field 3
	WaffleLifecycleHasAccessToken bool `wam:"waffle_lifecycle_has_access_token"` // field 4
	WaffleLifecycleHasExistingRow bool `wam:"waffle_lifecycle_has_existing_row"` // field 5
	WaffleLifecycleLinkState WAFFLELIFECYCLELINKSTATETYPE `wam:"waffle_lifecycle_link_state"` // field 6
	WaffleLifecycleRetryCount int64 `wam:"waffle_lifecycle_retry_count"` // field 7
	WaffleLifecycleTraceAction WAFFLELIFECYCLETRACEACTIONTYPE `wam:"waffle_lifecycle_trace_action"` // field 8
	WaffleLifecycleTraceSource WAFFLELIFECYCLETRACESOURCETYPE `wam:"waffle_lifecycle_trace_source"` // field 9
	WaffleLifecycleUnlinkType int64 `wam:"waffle_lifecycle_unlink_type"` // field 10
}