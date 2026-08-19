export const WamWefrClientExposure = 5504 as const

export interface WefrClientExposureEvent {
  /** field 1, wire `exposure_key` */
  exposureKey?: string
  /** field 3, wire `sent_with_daily` */
  sentWithDaily?: boolean
  /** field 4, wire `user_lid` */
  userLid?: number
  /** field 5, wire `device_exp_id` */
  deviceExpId?: string
  /** field 6, wire `is_canonical_ent_present` */
  isCanonicalEntPresent?: boolean
  /** field 7, wire `guest_id` */
  guestId?: string
  /** field 8, wire `canonical_ent_last_validation_ts_ms` */
  canonicalEntLastValidationTsMs?: number
  /** field 9, wire `from_metaconfig` */
  fromMetaconfig?: boolean
}