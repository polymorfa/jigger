const WamReachoutTimelockEnforcementSheetInfo = 5582 // channel: regular

type ReachoutTimelockEnforcementSheetInfoEvent struct {
	TimeSinceEnforcemeentEndAndSheetSeenMs string `wam:"time_since_enforcemeent_end_and_sheet_seen_ms"` // field 1
	WasSheetSeenForFirstTime bool `wam:"was_sheet_seen_for_first_time"` // field 2 (was_sheet_seen_for_first_time != False)
	ReachoutTimelockAction REACHOUTTIMELOCKACTION `wam:"reachout_timelock_action"` // field 3
	ReachoutTimelockEventSource REACHOUTTIMELOCKEVENTSOURCE `wam:"reachout_timelock_event_source"` // field 4
}