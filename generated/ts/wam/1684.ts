export const WamCriticalEvent = 1684 as const

export interface CriticalEventEvent {
  /** field 1, wire `name` */
  name?: string
  /** field 2, wire `context` */
  context?: string
  /** field 3, wire `debug` */
  debug?: string
  /** field 5, wire `mobile_build_id` */
  mobileBuildId?: string
  /** field 6, wire `crashlog_type` */
  crashlogType?: CRASHLOGTYPE
  /** field 7, wire `extra_debug` */
  extraDebug?: string
  /** field 8, wire `crash_application_state` */
  crashApplicationState?: CRASHAPPLICATIONSTATE
  /** field 9, wire `storage_avail_size_with_cache` */
  storageAvailSizeWithCache?: number
}