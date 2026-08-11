export const WamDisappearingModeSettingEvents = 3446 as const

export interface DisappearingModeSettingEventsEvent {
  /** field 1, wire `disappearing_mode_setting_event_name` */
  disappearingModeSettingEventName?: DISAPPEARINGMODESETTINGEVENTNAMETYPE
  /** field 2, wire `last_toggle_timestamp` */
  lastToggleTimestamp?: number
  /** field 3, wire `new_ephemerality_duration` */
  newEphemeralityDuration?: number
  /** field 4, wire `previous_ephemerality_duration` */
  previousEphemeralityDuration?: number
  /** field 5, wire `disappearing_mode_entry_point` */
  disappearingModeEntryPoint?: DISAPPEARINGMODEENTRYPOINTTYPE
  /** field 6, wire `is_after_read` */
  isAfterRead?: boolean
}