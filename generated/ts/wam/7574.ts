export const WamGroupSuspensionAppealEvents = 7574 as const

export interface GroupSuspensionAppealEventsEvent {
  /** field 1, wire `group_suspension_appeal_ui_action` */
  groupSuspensionAppealUiAction?: GROUPSUSPENSIONAPPEALUIACTION
  /** field 2, wire `group_suspension_appeal_ui_surface` */
  groupSuspensionAppealUiSurface?: GROUPSUSPENSIONAPPEALUISURFACE
  /** field 3, wire `group_type_client` */
  groupTypeClient?: GROUPTYPECLIENT
  /** field 4, wire `is_admin` */
  isAdmin?: boolean
  /** field 5, wire `group_jid` */
  groupJid?: string
  /** field 6, wire `group_suspension_appeal_error_message` */
  groupSuspensionAppealErrorMessage?: string
  /** field 7, wire `group_suspension_appeal_entry_point` */
  groupSuspensionAppealEntryPoint?: GROUPSUSPENSIONAPPEALENTRYPOINT
}