export const WamSettingsClick = 2214 as const

export interface SettingsClickEvent {
  /** field 1, wire `settings_item` */
  settingsItem?: SETTINGSITEMTYPE
  /** field 2, wire `settings_click_entry_point` */
  settingsClickEntryPoint?: SETTINGSCLICKENTRYPOINT
  /** field 3, wire `settings_page_type` */
  settingsPageType?: SETTINGSPAGETYPE
  /** field 4, wire `is_bookmark_app_installed` */
  isBookmarkAppInstalled?: boolean
}