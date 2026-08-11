export const WamRingtoneScreen = 7608 as const

export interface RingtoneScreenEvent {
  /** field 1, wire `premium_ringtones_downloaded_count` */
  premiumRingtonesDownloadedCount?: number
  /** field 2, wire `ringtone_change_applied` */
  ringtoneChangeApplied?: boolean
  /** field 3, wire `ringtone_id` */
  ringtoneId?: string
  /** field 4, wire `ringtone_selection_cancelled` */
  ringtoneSelectionCancelled?: boolean
  /** field 5, wire `ringtone_source` */
  ringtoneSource?: RINGTONEENTRYTYPE
  /** field 6, wire `ringtone_subscribe_selected` */
  ringtoneSubscribeSelected?: boolean
  /** field 7, wire `ringtone_reset` */
  ringtoneReset?: boolean
}