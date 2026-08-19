export const WamSettingsSearchTap = 4016 as const

export interface SettingsSearchTapEvent {
  /** field 1, wire `tap_item_name` */
  tapItemName?: string
  /** field 2, wire `top_level_parent_setting` */
  topLevelParentSetting?: SETTINGSITEMTYPE
}