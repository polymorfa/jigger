export const WamScreenLockSettingsData = 4802 as const

export interface ScreenLockSettingsDataEvent {
  /** field 1, wire `screen_auto_lock_duration` */
  screenAutoLockDuration?: number
}