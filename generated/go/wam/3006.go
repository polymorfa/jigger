const WamBizCatalogView = 3006 // channel: private

type BizCatalogViewEvent struct {
	CatalogViewAction CATALOGVIEWACTION `wam:"catalog_view_action"` // field 1
	CatalogEntryPoint CATALOGENTRYPOINT `wam:"catalog_entry_point"` // field 2
	CatalogSessionId string `wam:"catalog_session_id"` // field 3
	OrderId string `wam:"order_id"` // field 4
	IsOrderMsgAttached bool `wam:"is_order_msg_attached"` // field 5
	Quantity int64 `wam:"quantity"` // field 6
	IsNewProductAddedToCart bool `wam:"is_new_product_added_to_cart"` // field 7
	CatalogReportReasonCode string `wam:"catalog_report_reason_code"` // field 8
	ProductId string `wam:"product_id"` // field 9
	CatalogOwnerJid string `wam:"catalog_owner_jid"` // field 10
	CatalogEventSampled bool `wam:"catalog_event_sampled"` // field 11
	DeepLinkOpenFrom DEEPLINKOPENFROM `wam:"deep_link_open_from"` // field 12
	CartToggle bool `wam:"cart_toggle"` // field 13
	BizPlatform BIZPLATFORM `wam:"biz_platform"` // field 14
	CollectionId string `wam:"collection_id"` // field 15
	CollectionIndex string `wam:"collection_index"` // field 16
	ProductIndex string `wam:"product_index"` // field 17
	SequenceNumber int64 `wam:"sequence_number"` // field 18
	CatalogCategoryId string `wam:"catalog_category_id"` // field 19
	EntryPointConversionApp string `wam:"entry_point_conversion_app"` // field 20
	EntryPointConversionSource string `wam:"entry_point_conversion_source"` // field 21
	EntryPointConversationInitiated ENTRYPOINTCONVERSATIONINITIATED `wam:"entry_point_conversation_initiated"` // field 22
	HasVariants bool `wam:"has_variants"` // field 23
	VariantTypes string `wam:"variant_types"` // field 24
	VariantsExtraAttributes string `wam:"variants_extra_attributes"` // field 25
	AdId string `wam:"ad_id"` // field 26
}