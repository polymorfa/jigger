export const WamDisappearingMessageChatPicker = 3398 as const

export interface DisappearingMessageChatPickerEvent {
  /** field 1, wire `chats_selected` */
  chatsSelected?: number
  /** field 2, wire `dm_chat_picker_entry_point` */
  dmChatPickerEntryPoint?: DMCHATPICKERENTRYPOINTTYPE
  /** field 3, wire `dm_chat_picker_event_name` */
  dmChatPickerEventName?: DMCHATPICKEREVENTNAMETYPE
  /** field 4, wire `ephemerality_duration` */
  ephemeralityDuration?: number
  /** field 5, wire `group_chats_selected` */
  groupChatsSelected?: number
  /** field 7, wire `newly_ephemeral_chats` */
  newlyEphemeralChats?: number
  /** field 8, wire `total_chats_in_chat_picker` */
  totalChatsInChatPicker?: number
  /** field 9, wire `group_size_distribution_json` */
  groupSizeDistributionJson?: string
}