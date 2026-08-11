export const WamWebContactListStartNewChat = 4560 as const

export interface WebContactListStartNewChatEvent {
  /** field 1, wire `web_contact_list_start_new_chat_search` */
  webContactListStartNewChatSearch?: boolean
  /** field 2, wire `web_contact_list_start_new_chat_type` */
  webContactListStartNewChatType?: WEBCONTACTLISTSTARTNEWCHATTYPE
}