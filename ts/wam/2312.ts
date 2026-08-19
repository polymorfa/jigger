export const WamChatAction = 2312 as const

export interface ChatActionEvent {
  /** field 1, wire `chat_action_type` */
  chatActionType?: CHATACTIONTYPE
  /** field 2, wire `chat_action_entry_point` */
  chatActionEntryPoint?: CHATACTIONENTRYPOINT
  /** field 3, wire `chat_action_chat_type` */
  chatActionChatType?: CHATACTIONCHATTYPE
  /** field 4, wire `chat_action_mute_duration` */
  chatActionMuteDuration?: string
}