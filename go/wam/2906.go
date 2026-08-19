const WamLwiEntryPointImpression = 2906 // channel: regular

type LwiEntryPointImpressionEvent struct {
	CatalogSessionId string `wam:"catalog_session_id"` // field 1
	BusinessToolsSessionId string `wam:"business_tools_session_id"` // field 2
	LwiEntryPoint LWIENTRYPOINT `wam:"lwi_entry_point"` // field 3
	UserHasLinkedFbPage bool `wam:"user_has_linked_fb_page"` // field 4
	StatusSessionId int64 `wam:"status_session_id"` // field 5
	LwiSubEntryPoint LWISUBENTRYPOINT `wam:"lwi_sub_entry_point"` // field 6
	ItemsCount int64 `wam:"items_count"` // field 7
	ActiveItemsCount int64 `wam:"active_items_count"` // field 8
	ArchivedItemsCount int64 `wam:"archived_items_count"` // field 9
	LwiExtras string `wam:"lwi_extras"` // field 10
	StatusId string `wam:"status_id"` // field 11
	LwiEntryPointImpressionAction LWIENTRYPOINTIMPRESSIONACTION `wam:"lwi_entry_point_impression_action"` // field 12
}