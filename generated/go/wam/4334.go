const WamTsNavigation = 4334 // channel: regular

type TsNavigationEvent struct {
	GroupSize int64 `wam:"group_size"` // field 1
	NavigationDestination TSSURFACE `wam:"navigation_destination"` // field 2
	NavigationSource TSSURFACE `wam:"navigation_source"` // field 3
	RelativeTimestampMs int64 `wam:"relative_timestamp_ms"` // field 4
	TsSessionId int64 `wam:"ts_session_id"` // field 5
	TypeOfGroup TYPEOFGROUPENUM `wam:"type_of_group"` // field 6
	ThreadType THREADTYPE `wam:"thread_type"` // field 7
	Cid string `wam:"cid"` // field 19
	SmbCatalogBusinessVertical string `wam:"smb_catalog_business_vertical"` // field 20
	SmbCatalogIsCatalogVisible bool `wam:"smb_catalog_is_catalog_visible"` // field 21
	SmbCatalogIsToggleCart bool `wam:"smb_catalog_is_toggle_cart"` // field 22
	EntryPointConversationInitiated ENTRYPOINTCONVERSATIONINITIATED `wam:"entry_point_conversation_initiated"` // field 23
	EntryPointConversionApp string `wam:"entry_point_conversion_app"` // field 24
	EntryPointConversionSource string `wam:"entry_point_conversion_source"` // field 25
	IsCloudapi bool `wam:"is_cloudapi"` // field 26
	IsOnpremises bool `wam:"is_onpremises"` // field 27
	IsSmb bool `wam:"is_smb"` // field 28
	IsCatalogVisible bool `wam:"is_catalog_visible"` // field 29
	IsMetaAiThread bool `wam:"is_meta_ai_thread"` // field 30
	ReferrerAction REFERRERACTION `wam:"referrer_action"` // field 31
	TsTimestampMs int64 `wam:"ts_timestamp_ms"` // field 32
	UnifiedSessionId string `wam:"unified_session_id"` // field 33
	NavigationDestinationProductArea PRODUCTAREA `wam:"navigation_destination_product_area"` // field 34
	NavigationDestinationViewName string `wam:"navigation_destination_view_name"` // field 35
	IsCanonicalEntPresent bool `wam:"is_canonical_ent_present"` // field 36
	TraceIdInt int64 `wam:"trace_id_int"` // field 37
	CanonicalEntLastValidationTsMs int64 `wam:"canonical_ent_last_validation_ts_ms"` // field 38
	AiSessionId string `wam:"ai_session_id"` // field 39
	NetworkRadioTypeEventLevel RADIOTYPE `wam:"network_radio_type_event_level"` // field 40
	NetworkIsWifiOpNumber int64 `wam:"network_is_wifi_op_number"` // field 41
	NetworkRadioTypeOpNumber int64 `wam:"network_radio_type_op_number"` // field 42
	NetworkIsWifiCanonicalOpNumber int64 `wam:"network_is_wifi_canonical_op_number"` // field 43
	NetworkRadioTypeCanonicalOpNumber int64 `wam:"network_radio_type_canonical_op_number"` // field 44
}