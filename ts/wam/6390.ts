export const WamLimitSharingSettingUpdate = 6390 as const

export interface LimitSharingSettingUpdateEvent {
  /** field 1, wire `thread_id` */
  threadId?: string
  /** field 2, wire `toggle_update_action` */
  toggleUpdateAction?: TOGGLEUPDATEACTION
  /** field 3, wire `opus_action` */
  opusAction?: OPUSACTION
}