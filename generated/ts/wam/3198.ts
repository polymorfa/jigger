export const WamDeepLinkMsgSent = 3198 as const

export interface DeepLinkMsgSentEvent {
  /** field 1, wire `deep_link_action` */
  deepLinkAction?: DEEPLINKACTION
  /** field 2, wire `deep_link_session_id` */
  deepLinkSessionId?: string
}