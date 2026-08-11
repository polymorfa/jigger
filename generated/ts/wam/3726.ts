export const WamPrivacySettingsClick = 3726 as const

export interface PrivacySettingsClickEvent {
  /** field 1, wire `privacy_control_entry_point` */
  privacyControlEntryPoint?: PRIVACYCONTROLENTRYPOINTTYPE
  /** field 2, wire `privacy_control_item` */
  privacyControlItem?: PRIVACYCONTROLITEMTYPE
}