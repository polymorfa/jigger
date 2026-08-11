export const WamMessageContextMenuActions = 3694 as const

export interface MessageContextMenuActionsEvent {
  /** field 1, wire `is_a_group` */
  isAGroup?: boolean
  /** field 2, wire `is_multi_action` */
  isMultiAction?: boolean
  /** field 3, wire `is_original_sender` */
  isOriginalSender?: boolean
  /** field 4, wire `message_context_menu_action` */
  messageContextMenuAction?: MESSAGECONTEXTMENUACTIONTYPE
  /** field 5, wire `message_context_menu_option` */
  messageContextMenuOption?: MESSAGECONTEXTMENUOPTIONTYPE
}