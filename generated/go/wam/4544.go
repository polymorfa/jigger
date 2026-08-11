const WamChannelDirectory = 4544 // channel: regular

type ChannelDirectoryEvent struct {
	ChannelDirectoryAction CHANNELDIRECTORYACTION `wam:"channel_directory_action"` // field 1
	ChannelDirectoryEntryPoint CHANNELDIRECTORYENTRYPOINT `wam:"channel_directory_entry_point"` // field 2
	ChannelDirectorySessionId int64 `wam:"channel_directory_session_id"` // field 3
	Cid string `wam:"cid"` // field 4
	ChannelDirectoryActionSequenceNumber int64 `wam:"channel_directory_action_sequence_number"` // field 5
	ChannelIndex int64 `wam:"channel_index"` // field 6
	SearchMode bool `wam:"search_mode"` // field 7
	CountrySelector string `wam:"country_selector"` // field 8
	ImpReason CHANNELDIRECTORYIMPREASON `wam:"imp_reason"` // field 9
	PillSelected CHANNELDIRECTORYPILLSELECTED `wam:"pill_selected"` // field 10
	ChannelCategoryIndex int64 `wam:"channel_category_index"` // field 11
	ChannelCategoryName string `wam:"channel_category_name"` // field 12
	ChannelDirectorySurface CHANNELDIRECTORYSURFACE `wam:"channel_directory_surface"` // field 13
	ChannelDirectorySearchSessionId string `wam:"channel_directory_search_session_id"` // field 14
	UnifiedSessionId string `wam:"unified_session_id"` // field 15
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 16
}