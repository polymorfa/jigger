export const WamChannelDirectory = 4544 as const

export interface ChannelDirectoryEvent {
  /** field 1, wire `channel_directory_action` */
  channelDirectoryAction?: CHANNELDIRECTORYACTION
  /** field 2, wire `channel_directory_entry_point` */
  channelDirectoryEntryPoint?: CHANNELDIRECTORYENTRYPOINT
  /** field 3, wire `channel_directory_session_id` */
  channelDirectorySessionId?: number
  /** field 4, wire `cid` */
  cid?: string
  /** field 5, wire `channel_directory_action_sequence_number` */
  channelDirectoryActionSequenceNumber?: number
  /** field 6, wire `channel_index` */
  channelIndex?: number
  /** field 7, wire `search_mode` */
  searchMode?: boolean
  /** field 8, wire `country_selector` */
  countrySelector?: string
  /** field 9, wire `imp_reason` */
  impReason?: CHANNELDIRECTORYIMPREASON
  /** field 10, wire `pill_selected` */
  pillSelected?: CHANNELDIRECTORYPILLSELECTED
  /** field 11, wire `channel_category_index` */
  channelCategoryIndex?: number
  /** field 12, wire `channel_category_name` */
  channelCategoryName?: string
  /** field 13, wire `channel_directory_surface` */
  channelDirectorySurface?: CHANNELDIRECTORYSURFACE
  /** field 14, wire `channel_directory_search_session_id` */
  channelDirectorySearchSessionId?: string
  /** field 15, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 16, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
}