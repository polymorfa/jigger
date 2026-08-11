const WamWebcStatusSync = 1878 // channel: regular

type WebcStatusSyncEvent struct {
	WebcStatusSyncT string `wam:"webc_status_sync_t"` // field 1
	WebcStatusRecentItemCount int64 `wam:"webc_status_recent_item_count"` // field 2
	WebcStatusViewedItemCount int64 `wam:"webc_status_viewed_item_count"` // field 3
	WebcStatusMutedItemCount int64 `wam:"webc_status_muted_item_count"` // field 4
	WebcStatusRecentRowCount int64 `wam:"webc_status_recent_row_count"` // field 5
	WebcStatusViewedRowCount int64 `wam:"webc_status_viewed_row_count"` // field 6
	WebcStatusMutedRowCount int64 `wam:"webc_status_muted_row_count"` // field 7
}