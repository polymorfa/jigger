export const WamGroupCreate = 594 as const

export interface GroupCreateEvent {
  /** field 1, wire `group_create_entry_point` */
  groupCreateEntryPoint?: GROUPCREATEENTRYPOINT
  /** field 2, wire `ephemerality_duration` */
  ephemeralityDuration?: number
  /** field 3, wire `has_group_name` */
  hasGroupName?: boolean
}