export const WamUiMessageYourselfAction = 3780 as const

export interface UiMessageYourselfActionEvent {
  /** field 1, wire `ui_message_yourself_action_session_id` */
  uiMessageYourselfActionSessionId?: string
  /** field 2, wire `ui_message_yourself_action_type` */
  uiMessageYourselfActionType?: UIMESSAGEYOURSELFACTIONTYPE
  /** field 3, wire `ui_message_yourself_funnel_name` */
  uiMessageYourselfFunnelName?: UIMESSAGEYOURSELFFUNNELNAME
}