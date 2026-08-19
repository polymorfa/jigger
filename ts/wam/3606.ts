export const WamViewOnceScreenshotActions = 3606 as const

export interface ViewOnceScreenshotActionsEvent {
  /** field 1, wire `is_a_group` */
  isAGroup?: boolean
  /** field 2, wire `thread_id` */
  threadId?: string
  /** field 3, wire `vo_message_type` */
  voMessageType?: VOMESSAGETYPE
  /** field 4, wire `vo_ss_action` */
  voSsAction?: VOSSACTION
}