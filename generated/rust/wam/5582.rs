pub const WAM_REACHOUT_TIMELOCK_ENFORCEMENT_SHEET_INFO: u32 = 5582;

#[derive(Debug, Default)]
pub struct ReachoutTimelockEnforcementSheetInfoEvent {
    /// field 1, wire `time_since_enforcemeent_end_and_sheet_seen_ms`
    pub time_since_enforcemeent_end_and_sheet_seen_ms: Option<String>,
    /// field 2, wire `was_sheet_seen_for_first_time` (was_sheet_seen_for_first_time != False)
    pub was_sheet_seen_for_first_time: Option<bool>,
    /// field 3, wire `reachout_timelock_action`
    pub reachout_timelock_action: Option<REACHOUTTIMELOCKACTION>,
    /// field 4, wire `reachout_timelock_event_source`
    pub reachout_timelock_event_source: Option<REACHOUTTIMELOCKEVENTSOURCE>,
}