export const WamGroupCatchUp = 3058 as const

export interface GroupCatchUpEvent {
  /** field 4, wire `mentions_count_pending_percentage` */
  mentionsCountPendingPercentage?: number
}