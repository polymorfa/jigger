export const WamDisappearingMessageKeepInChat = 3482 as const

export interface DisappearingMessageKeepInChatEvent {
  /** field 1, wire `chat_ephemerality_duration` */
  chatEphemeralityDuration?: number
  /** field 2, wire `is_a_group` */
  isAGroup?: boolean
  /** field 3, wire `is_admin` */
  isAdmin?: boolean
  /** field 4, wire `kept_delta` */
  keptDelta?: number
  /** field 5, wire `kic_action_name` */
  kicActionName?: KICACTIONNAMETYPE
  /** field 6, wire `kic_actor` */
  kicActor?: KICACTORTYPE
  /** field 7, wire `kic_entry_point` */
  kicEntryPoint?: KICENTRYPOINTTYPE
  /** field 8, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 9, wire `message_expired_on_unkeep` */
  messageExpiredOnUnkeep?: boolean
  /** field 10, wire `message_expiry_timer` */
  messageExpiryTimer?: number
  /** field 11, wire `messages_in_folder` */
  messagesInFolder?: number
  /** field 12, wire `messages_selected` */
  messagesSelected?: number
  /** field 13, wire `thread_id` */
  threadId?: string
  /** field 15, wire `kept_count` */
  keptCount?: number
  /** field 16, wire `can_edit_dm_settings` */
  canEditDmSettings?: boolean
}