export const WamAdvStoredTimestampExpired = 3036 as const

export interface AdvStoredTimestampExpiredEvent {
  /** field 1, wire `adv_expire_time_in_hours` */
  advExpireTimeInHours?: number
}