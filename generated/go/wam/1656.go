const WamStatusRowView = 1656 // channel: regular

type StatusRowViewEvent struct {
	StatusSessionId int64 `wam:"status_session_id"` // field 1
	StatusViewerSessionId int64 `wam:"status_viewer_session_id"` // field 2
	StatusRowSection STATUSROWSECTION `wam:"status_row_section"` // field 3
	StatusRowIndex int64 `wam:"status_row_index"` // field 4
	StatusRowEntryMethod STATUSROWENTRYMETHOD `wam:"status_row_entry_method"` // field 5
	StatusRowViewCount int64 `wam:"status_row_view_count"` // field 6
	StatusRowUnreadItemCount int64 `wam:"status_row_unread_item_count"` // field 7
	PsaCampaigns string `wam:"psa_campaigns"` // field 8
	UnifiedSessionId string `wam:"unified_session_id"` // field 9
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 10
}