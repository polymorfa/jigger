export const WamTestAnonymousWeeklyId = 2956 as const

export interface TestAnonymousWeeklyIdEvent {
  /** field 1, wire `ps_time_since_last_event_in_min` */
  psTimeSinceLastEventInMin?: number
  /** field 2, wire `ps_test_boolean_field` */
  psTestBooleanField?: boolean
  /** field 3, wire `ps_test_string_field` */
  psTestStringField?: string
}