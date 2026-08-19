export const WamWebcStatusSync = 1878 as const

export interface WebcStatusSyncEvent {
  /** field 1, wire `webc_status_sync_t` */
  webcStatusSyncT?: string
  /** field 2, wire `webc_status_recent_item_count` */
  webcStatusRecentItemCount?: number
  /** field 3, wire `webc_status_viewed_item_count` */
  webcStatusViewedItemCount?: number
  /** field 4, wire `webc_status_muted_item_count` */
  webcStatusMutedItemCount?: number
  /** field 5, wire `webc_status_recent_row_count` */
  webcStatusRecentRowCount?: number
  /** field 6, wire `webc_status_viewed_row_count` */
  webcStatusViewedRowCount?: number
  /** field 7, wire `webc_status_muted_row_count` */
  webcStatusMutedRowCount?: number
}