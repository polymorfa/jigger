export const WamPinnedChats = 7630 as const

export interface PinnedChatsEvent {
  /** field 1, wire `pinned_chat_number` */
  pinnedChatNumber?: number
  /** field 2, wire `pinned_chats_premium_status` */
  pinnedChatsPremiumStatus?: PINNEDCHATSPREMIUMSTATUSTYPE
}