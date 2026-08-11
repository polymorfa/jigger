export const WamDisappearingModeSettingChange = 3056 as const

export interface DisappearingModeSettingChangeEvent {
  /** field 1, wire `previous_ephemerality_duration` */
  previousEphemeralityDuration?: number
  /** field 2, wire `new_ephemerality_duration` */
  newEphemeralityDuration?: number
  /** field 3, wire `last_toggle_timestamp` */
  lastToggleTimestamp?: number
  /** field 4, wire `disappearing_mode_entry_point` */
  disappearingModeEntryPoint?: DISAPPEARINGMODEENTRYPOINTTYPE
  /** field 5, wire `after_read_duration` */
  afterReadDuration?: number
  /** field 7, wire `error_code` */
  errorCode?: number
  /** field 8, wire `is_after_read` */
  isAfterRead?: boolean
  /** field 9, wire `is_success` */
  isSuccess?: boolean
  /** field 10, wire `previous_ephemerality_type` */
  previousEphemeralityType?: PREVIOUSEPHEMERALITYTYPE
}