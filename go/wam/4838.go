const WamUpdatesTabSearch = 4838 // channel: regular

type UpdatesTabSearchEvent struct {
	ChannelsFollowedCount int64 `wam:"channels_followed_count"` // field 1
	RecentStatusItemCount int64 `wam:"recent_status_item_count"` // field 2
	RecentStatusRowCount int64 `wam:"recent_status_row_count"` // field 3
	UpdateTabSearchEventType UPDATETABSEARCHEVENTTYPE `wam:"update_tab_search_event_type"` // field 4
	ChannelsAdminCount int64 `wam:"channels_admin_count"` // field 5
	ViewedStatusItemCount int64 `wam:"viewed_status_item_count"` // field 6
	ViewedStatusRowCount int64 `wam:"viewed_status_row_count"` // field 7
	PremiumChannelsFollowedCount int64 `wam:"premium_channels_followed_count"` // field 8
	UpdatesTabSearchResultType UPDATESTABSEARCHRESULTTYPE `wam:"updates_tab_search_result_type"` // field 9
	UpdatesTabSearchSessionId string `wam:"updates_tab_search_session_id"` // field 10
	UpdatesTabSearchModeType UPDATESTABSEARCHMODETYPE `wam:"updates_tab_search_mode_type"` // field 11
	UnifiedSessionId string `wam:"unified_session_id"` // field 12
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 13
}