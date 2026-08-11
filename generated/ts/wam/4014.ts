export const WamSettingsSearchInitiate = 4014 as const

export interface SettingsSearchInitiateEvent {
  /** field 1, wire `settings_page_type` */
  settingsPageType?: SETTINGSPAGETYPE
}