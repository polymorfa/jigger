export const WamChatFolderOpen = 2808 as const

export interface ChatFolderOpenEvent {
  /** field 1, wire `folder_type` */
  folderType?: string
  /** field 2, wire `activity_indicator_count` */
  activityIndicatorCount?: number
  /** field 3, wire `has_important_messages` */
  hasImportantMessages?: boolean
}