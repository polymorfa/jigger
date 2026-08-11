export const WamEphemeralSettingChange = 2370 as const

export interface EphemeralSettingChangeEvent {
  /** field 1, wire `chat_ephemerality_duration` */
  chatEphemeralityDuration?: number
  /** field 2, wire `previous_ephemerality_duration` */
  previousEphemeralityDuration?: number
  /** field 3, wire `ephemeral_setting_entry_point` */
  ephemeralSettingEntryPoint?: EPHEMERALSETTINGENTRYPOINTTYPE
  /** field 5, wire `ephemeral_setting_group_size` */
  ephemeralSettingGroupSize?: PRECISESIZEBUCKET
  /** field 6, wire `thread_id` */
  threadId?: string
  /** field 7, wire `after_read_duration` */
  afterReadDuration?: number
  /** field 9, wire `error_code` */
  errorCode?: number
  /** field 10, wire `is_after_read` */
  isAfterRead?: boolean
  /** field 11, wire `is_success` */
  isSuccess?: boolean
  /** field 12, wire `previous_ephemerality_type` */
  previousEphemeralityType?: PREVIOUSEPHEMERALITYTYPE
}