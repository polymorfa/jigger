export const WamAppLaunch = 1094 as const

export interface AppLaunchEvent {
  /** field 1, wire `app_launch_t` */
  appLaunchT?: string
  /** field 2, wire `app_launch_cpu_t` */
  appLaunchCpuT?: string
  /** field 3, wire `app_launch_main_pre_t` */
  appLaunchMainPreT?: string
  /** field 4, wire `app_launch_main_run_t` */
  appLaunchMainRunT?: string
  /** field 5, wire `app_launch_type_t` */
  appLaunchTypeT?: APPLAUNCHTYPE
  /** field 7, wire `app_launch_destination` */
  appLaunchDestination?: APPLAUNCHDESTINATIONTYPE
  /** field 8, wire `db_reads_count` */
  dbReadsCount?: number
  /** field 9, wire `db_writes_count` */
  dbWritesCount?: number
  /** field 10, wire `db_main_thread_count` */
  dbMainThreadCount?: number
  /** field 12, wire `low_power_mode_enabled` */
  lowPowerModeEnabled?: boolean
  /** field 15, wire `process_identifier` */
  processIdentifier?: number
  /** field 16, wire `peripheral_connected` */
  peripheralConnected?: string
  /** field 17, wire `db_bg_thread_reads_duration_t` */
  dbBgThreadReadsDurationT?: string
  /** field 18, wire `db_bg_thread_writes_duration_t` */
  dbBgThreadWritesDurationT?: string
  /** field 19, wire `db_main_thread_reads_duration_t` */
  dbMainThreadReadsDurationT?: string
  /** field 20, wire `db_main_thread_writes_duration_t` */
  dbMainThreadWritesDurationT?: string
  /** field 22, wire `app_context` */
  appContext?: string
  /** field 23, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 24, wire `trace_id_int` */
  traceIdInt?: number
}