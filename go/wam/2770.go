const WamLwiEntryTap = 2770 // channel: regular

type LwiEntryTapEvent struct {
	LwiFlowId string `wam:"lwi_flow_id"` // field 1
	CatalogSessionId string `wam:"catalog_session_id"` // field 2
	LwiEntryPoint LWIENTRYPOINT `wam:"lwi_entry_point"` // field 3
	BusinessToolsSessionId string `wam:"business_tools_session_id"` // field 4
	UserHasLinkedFbPage bool `wam:"user_has_linked_fb_page"` // field 5
	StatusSessionId int64 `wam:"status_session_id"` // field 6
	LwiSubEntryPoint LWISUBENTRYPOINT `wam:"lwi_sub_entry_point"` // field 7
	WaCampaignId string `wam:"wa_campaign_id"` // field 10
	ItemsCount int64 `wam:"items_count"` // field 11
	StatusTypeMedia STATUSTYPEMEDIA `wam:"status_type_media"` // field 12
	PreviousLwiFlowId string `wam:"previous_lwi_flow_id"` // field 13
	ActiveItemsCount int64 `wam:"active_items_count"` // field 14
	ArchivedItemsCount int64 `wam:"archived_items_count"` // field 15
	NotificationLogId string `wam:"notification_log_id"` // field 16
	LwiExtras string `wam:"lwi_extras"` // field 17
	StatusId string `wam:"status_id"` // field 18
	WebFlowType WEBFLOWTYPE `wam:"web_flow_type"` // field 19
}