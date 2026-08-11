export const WamUiRevokeAction = 3298 as const

export interface UiRevokeActionEvent {
  /** field 1, wire `message_action` */
  messageAction?: UIREVOKEACTIONTYPE
  /** field 2, wire `ui_revoke_action_duration` */
  uiRevokeActionDuration?: number
  /** field 3, wire `ui_revoke_action_session_id` */
  uiRevokeActionSessionId?: string
}