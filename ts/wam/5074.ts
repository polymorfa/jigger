export const WamWebDbTableUsage = 5074 as const

export interface WebDbTableUsageEvent {
  /** field 1, wire `offline_session_id` */
  offlineSessionId?: string
  /** field 2, wire `web_scenario` */
  webScenario?: WEBSCENARIOCODE
  /** field 3, wire `web_table` */
  webTable?: string
  /** field 4, wire `web_table_log_reason` */
  webTableLogReason?: WEBTABLELOGREASONCODE
  /** field 5, wire `web_table_read_count` */
  webTableReadCount?: number
  /** field 6, wire `web_table_write_count` */
  webTableWriteCount?: number
}