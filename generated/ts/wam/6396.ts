export const WamSettingsChange = 6396 as const

export interface SettingsChangeEvent {
  /** field 2, wire `previous_setting_value` */
  previousSettingValue?: string
  /** field 3, wire `setting_type` */
  settingType?: SETTINGTYPE
  /** field 4, wire `current_setting_value` */
  currentSettingValue?: string
}