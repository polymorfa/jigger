export const WamUpdatesTabSearch = 4838 as const

export interface UpdatesTabSearchEvent {
  /** field 1, wire `channels_followed_count` */
  channelsFollowedCount?: number
  /** field 2, wire `recent_status_item_count` */
  recentStatusItemCount?: number
  /** field 3, wire `recent_status_row_count` */
  recentStatusRowCount?: number
  /** field 4, wire `update_tab_search_event_type` */
  updateTabSearchEventType?: UPDATETABSEARCHEVENTTYPE
  /** field 5, wire `channels_admin_count` */
  channelsAdminCount?: number
  /** field 6, wire `viewed_status_item_count` */
  viewedStatusItemCount?: number
  /** field 7, wire `viewed_status_row_count` */
  viewedStatusRowCount?: number
  /** field 8, wire `premium_channels_followed_count` */
  premiumChannelsFollowedCount?: number
  /** field 9, wire `updates_tab_search_result_type` */
  updatesTabSearchResultType?: UPDATESTABSEARCHRESULTTYPE
  /** field 10, wire `updates_tab_search_session_id` */
  updatesTabSearchSessionId?: string
  /** field 11, wire `updates_tab_search_mode_type` */
  updatesTabSearchModeType?: UPDATESTABSEARCHMODETYPE
  /** field 12, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 13, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
}