export const WamCrashLog = 494 as const

export interface CrashLogEvent {
  /** field 2, wire `crash_reason` */
  crashReason?: string
  /** field 3, wire `crash_context` */
  crashContext?: string
  /** field 5, wire `crash_count` */
  crashCount?: number
  /** field 6, wire `crash_type` */
  crashType?: CRASHTYPE
  /** field 16, wire `running_tasks` */
  runningTasks?: string
  /** field 18, wire `process_identifier` */
  processIdentifier?: number
  /** field 19, wire `peripheral_connected` */
  peripheralConnected?: string
  /** field 20, wire `active_subfunnel_id` */
  activeSubfunnelId?: string
  /** field 21, wire `active_subfunnel_type` */
  activeSubfunnelType?: SUBFUNNELTYPE
  /** field 22, wire `chat_session_id` */
  chatSessionId?: string
  /** field 23, wire `crash_application_state` */
  crashApplicationState?: CRASHAPPLICATIONSTATE
  /** field 24, wire `crash_timeout` */
  crashTimeout?: number
  /** field 25, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 26, wire `iphone_time_spent_surface_id` */
  iphoneTimeSpentSurfaceId?: TSSURFACE
  /** field 27, wire `crash_log_time_spent_view_name` */
  crashLogTimeSpentViewName?: string
  /** field 28, wire `crash_log_product_area` */
  crashLogProductArea?: PRODUCTAREA
  /** field 29, wire `ufad_report_type` */
  ufadReportType?: UFADREPORTTYPE
  /** field 30, wire `iphone_process_non_global` */
  iphoneProcessNonGlobal?: IPHONEPROCESSNONGLOBAL
  /** field 31, wire `low_power_mode_enabled` */
  lowPowerModeEnabled?: boolean
  /** field 32, wire `app_context` */
  appContext?: string
  /** field 33, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 34, wire `call_test_bucket_id_list` */
  callTestBucketIdList?: string
  /** field 35, wire `trace_id_int` */
  traceIdInt?: number
  /** field 36, wire `crash_log_sas_enabled` */
  crashLogSasEnabled?: boolean
}