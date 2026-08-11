export const WamWaffleCompanionStateLifecycle = 8248 as const

export interface WaffleCompanionStateLifecycleEvent {
  /** field 1, wire `waffle_lifecycle_elapsed_ms` */
  waffleLifecycleElapsedMs?: number
  /** field 2, wire `waffle_lifecycle_error_action` */
  waffleLifecycleErrorAction?: WAFFLELIFECYCLEERRORACTIONTYPE
  /** field 3, wire `waffle_lifecycle_error_code` */
  waffleLifecycleErrorCode?: WAFFLELIFECYCLEERRORCODETYPE
  /** field 4, wire `waffle_lifecycle_has_access_token` */
  waffleLifecycleHasAccessToken?: boolean
  /** field 5, wire `waffle_lifecycle_has_existing_row` */
  waffleLifecycleHasExistingRow?: boolean
  /** field 6, wire `waffle_lifecycle_link_state` */
  waffleLifecycleLinkState?: WAFFLELIFECYCLELINKSTATETYPE
  /** field 7, wire `waffle_lifecycle_retry_count` */
  waffleLifecycleRetryCount?: number
  /** field 8, wire `waffle_lifecycle_trace_action` */
  waffleLifecycleTraceAction?: WAFFLELIFECYCLETRACEACTIONTYPE
  /** field 9, wire `waffle_lifecycle_trace_source` */
  waffleLifecycleTraceSource?: WAFFLELIFECYCLETRACESOURCETYPE
  /** field 10, wire `waffle_lifecycle_unlink_type` */
  waffleLifecycleUnlinkType?: number
}