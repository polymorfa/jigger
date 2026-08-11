export const WamSystemMessageClick = 5082 as const

export interface SystemMessageClickEvent {
  /** field 1, wire `is_a_group` */
  isAGroup?: boolean
  /** field 2, wire `is_a_new_thread` */
  isANewThread?: boolean
  /** field 3, wire `system_message_category` */
  systemMessageCategory?: SYSTEMMESSAGECATEGORYTYPE
  /** field 4, wire `system_message_type` */
  systemMessageType?: SYSTEMMESSAGETYPETYPE
}