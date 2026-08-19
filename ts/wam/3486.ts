export const WamKeepInChatNux = 3486 as const

export interface KeepInChatNuxEvent {
  /** field 1, wire `chat_ephemerality_duration` */
  chatEphemeralityDuration?: number
  /** field 2, wire `kic_nux_action_name` */
  kicNuxActionName?: KICNUXACTIONNAMETYPE
  /** field 3, wire `thread_id` */
  threadId?: string
  /** field 4, wire `trigger` */
  trigger?: TRIGGERTYPE
}