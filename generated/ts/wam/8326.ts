export const WamWebcQuickAction = 8326 as const

export interface WebcQuickActionEvent {
  /** field 1, wire `webc_quick_action_event_type` */
  webcQuickActionEventType?: WEBCQUICKACTIONEVENTTYPE
  /** field 2, wire `webc_quick_action_id` */
  webcQuickActionId?: WEBCQUICKACTIONID
  /** field 3, wire `webc_quick_action_is_customized` */
  webcQuickActionIsCustomized?: boolean
  /** field 4, wire `webc_quick_action_num_visible` */
  webcQuickActionNumVisible?: number
  /** field 5, wire `webc_quick_action_slot_position` */
  webcQuickActionSlotPosition?: number
  /** field 6, wire `webc_quick_action_surface` */
  webcQuickActionSurface?: WEBCQUICKACTIONSURFACE
}