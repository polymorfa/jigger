export const WamChatLockAction = 4212 as const

export interface ChatLockActionEvent {
  /** field 1, wire `chat_lock_action_type` */
  chatLockActionType?: CHATLOCKACTIONTYPE
  /** field 2, wire `chat_lock_is_group` */
  chatLockIsGroup?: boolean
  /** field 3, wire `action_entry_point` */
  actionEntryPoint?: ACTIONENTRYPOINT
  /** field 4, wire `action_folder_chats_count` */
  actionFolderChatsCount?: number
  /** field 5, wire `auth_type` */
  authType?: AUTHTYPE
}