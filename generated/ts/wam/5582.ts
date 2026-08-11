export const WamReachoutTimelockEnforcementSheetInfo = 5582 as const

export interface ReachoutTimelockEnforcementSheetInfoEvent {
  /** field 1, wire `time_since_enforcemeent_end_and_sheet_seen_ms` */
  timeSinceEnforcemeentEndAndSheetSeenMs?: string
  /** field 2, wire `was_sheet_seen_for_first_time` (was_sheet_seen_for_first_time != False) */
  wasSheetSeenForFirstTime?: boolean
  /** field 3, wire `reachout_timelock_action` */
  reachoutTimelockAction?: REACHOUTTIMELOCKACTION
  /** field 4, wire `reachout_timelock_event_source` */
  reachoutTimelockEventSource?: REACHOUTTIMELOCKEVENTSOURCE
}