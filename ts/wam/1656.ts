export const WamStatusRowView = 1656 as const

export interface StatusRowViewEvent {
  /** field 1, wire `status_session_id` */
  statusSessionId?: number
  /** field 2, wire `status_viewer_session_id` */
  statusViewerSessionId?: number
  /** field 3, wire `status_row_section` */
  statusRowSection?: STATUSROWSECTION
  /** field 4, wire `status_row_index` */
  statusRowIndex?: number
  /** field 5, wire `status_row_entry_method` */
  statusRowEntryMethod?: STATUSROWENTRYMETHOD
  /** field 6, wire `status_row_view_count` */
  statusRowViewCount?: number
  /** field 7, wire `status_row_unread_item_count` */
  statusRowUnreadItemCount?: number
  /** field 8, wire `psa_campaigns` */
  psaCampaigns?: string
  /** field 9, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 10, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
}