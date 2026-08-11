export const WamTsExternal = 4574 as const

export interface TsExternalEvent {
  /** field 1, wire `relative_timestamp_ms` */
  relativeTimestampMs?: number
  /** field 2, wire `ts_duration` */
  tsDuration?: number
  /** field 3, wire `ts_external_event_source` */
  tsExternalEventSource?: TSEXTERNALEVENTSOURCE
  /** field 4, wire `ts_session_id` */
  tsSessionId?: number
  /** field 5, wire `ts_timestamp_ms` */
  tsTimestampMs?: number
  /** field 6, wire `unified_session_id` */
  unifiedSessionId?: string
}