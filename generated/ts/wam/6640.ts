export const WamWefrGroupClientExposure = 6640 as const

export interface WefrGroupClientExposureEvent {
  /** field 1, wire `exposure_key` */
  exposureKey?: string
  /** field 2, wire `group_jid` */
  groupJid?: string
  /** field 3, wire `sent_with_daily` */
  sentWithDaily?: boolean
}