export const WamBusinessUnmute = 1378 as const

export interface BusinessUnmuteEvent {
  /** field 1, wire `mutee_id` */
  muteeId?: string
}