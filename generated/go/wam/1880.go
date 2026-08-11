const WamWebcStatusSession = 1880 // channel: regular

type WebcStatusSessionEvent struct {
	WebcStatusSessionId int64 `wam:"webc_status_session_id"` // field 1
	WebcStatusRecentItemCount int64 `wam:"webc_status_recent_item_count"` // field 2
	WebcStatusViewedItemCount int64 `wam:"webc_status_viewed_item_count"` // field 3
	WebcStatusMutedItemCount int64 `wam:"webc_status_muted_item_count"` // field 4
	WebcStatusRecentRowCount int64 `wam:"webc_status_recent_row_count"` // field 5
	WebcStatusViewedRowCount int64 `wam:"webc_status_viewed_row_count"` // field 6
	WebcStatusMutedRowCount int64 `wam:"webc_status_muted_row_count"` // field 7
}