export const WamLockFolderUnlock = 4218 as const

export interface LockFolderUnlockEvent {
  /** field 1, wire `landing_surface` */
  landingSurface?: LANDINGSURFACE
  /** field 2, wire `total_chat_count` */
  totalChatCount?: number
  /** field 3, wire `unlock_entry_point` */
  unlockEntryPoint?: UNLOCKENTRYPOINT
}