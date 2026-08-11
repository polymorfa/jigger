const WamCatalogBiz = 1722 // channel: regular

type CatalogBizEvent struct {
	CatalogBizAction CATALOGBIZACTION `wam:"catalog_biz_action"` // field 1
	ProductId string `wam:"product_id"` // field 2
	CatalogSessionId string `wam:"catalog_session_id"` // field 3
	CatalogAppealReason string `wam:"catalog_appeal_reason"` // field 4
	ErrorCode int64 `wam:"error_code"` // field 5
	ProductCount int64 `wam:"product_count"` // field 6
	CatalogEntryPoint CATALOGENTRYPOINT `wam:"catalog_entry_point"` // field 7
	DeepLinkOpenFrom DEEPLINKOPENFROM `wam:"deep_link_open_from"` // field 8
	OrderId string `wam:"order_id"` // field 9
	IsOrderMsgAttached bool `wam:"is_order_msg_attached"` // field 10
	Quantity int64 `wam:"quantity"` // field 11
	ProductIds string `wam:"product_ids"` // field 12
	CartToggle bool `wam:"cart_toggle"` // field 13
	CollectionId string `wam:"collection_id"` // field 14
	CollectionIndex string `wam:"collection_index"` // field 15
	ProductIndex string `wam:"product_index"` // field 16
	CollectionCount int64 `wam:"collection_count"` // field 18
	AdId string `wam:"ad_id"` // field 19
	EntryPointConversionSource string `wam:"entry_point_conversion_source"` // field 20
	LastMessageDirection LASTMESSAGEDIRECTION `wam:"last_message_direction"` // field 21
	MessageDepth int64 `wam:"message_depth"` // field 22
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 23
	ExtraAttributes string `wam:"extra_attributes"` // field 24
}