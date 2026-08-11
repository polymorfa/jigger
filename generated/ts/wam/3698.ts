export const WamKeepInChatErrors = 3698 as const

export interface KeepInChatErrorsEvent {
  /** field 2, wire `is_a_group` */
  isAGroup?: boolean
  /** field 3, wire `is_admin` */
  isAdmin?: boolean
  /** field 4, wire `kic_action` */
  kicAction?: KICACTIONTYPE
  /** field 5, wire `kic_error_code` */
  kicErrorCode?: KICERRORCODETYPE
  /** field 6, wire `kic_message_ephemerality_duration` */
  kicMessageEphemeralityDuration?: number
  /** field 7, wire `can_edit_dm_settings` */
  canEditDmSettings?: boolean
}