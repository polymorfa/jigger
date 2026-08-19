export const WamBusinessMute = 1376 as const

export interface BusinessMuteEvent {
  /** field 1, wire `mutee_id` */
  muteeId?: string
  /** field 2, wire `mute_t` */
  muteT?: string
}