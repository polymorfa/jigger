export const WamChatLockDaily = 4214 as const

export interface ChatLockDailyEvent {
  /** field 1, wire `folder_chats_count` */
  folderChatsCount?: number
  /** field 2, wire `folder_open_count` */
  folderOpenCount?: number
  /** field 3, wire `new_add_chat_count` */
  newAddChatCount?: number
  /** field 4, wire `new_remove_chat_count` */
  newRemoveChatCount?: number
  /** field 5, wire `lock_folder_hidden` */
  lockFolderHidden?: boolean
  /** field 6, wire `secret_code_active` */
  secretCodeActive?: boolean
}