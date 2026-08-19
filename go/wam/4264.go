const WamCtwaOrderSignal = 4264 // channel: regular

type CtwaOrderSignalEvent struct {
	CtwaOrderSignalVersion int64 `wam:"ctwa_order_signal_version"` // field 1
	DeepLinkConversionData string `wam:"deep_link_conversion_data"` // field 2
	DeepLinkConversionSource string `wam:"deep_link_conversion_source"` // field 3
	EventSharingSettingEnabled bool `wam:"event_sharing_setting_enabled"` // field 4
	GlobalSharingSettingEnabled bool `wam:"global_sharing_setting_enabled"` // field 5
	OrderSignalType ORDERSIGNALTYPE `wam:"order_signal_type"` // field 6
	OrderStatus ORDERSTATUS `wam:"order_status"` // field 7
	OrderPaid bool `wam:"order_paid"` // field 8
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 9
	CtwaSignalMetadata string `wam:"ctwa_signal_metadata"` // field 10
	CustomerAdsSharingSettingEnabled CUSTOMERADSSHARINGSETTINGENABLED `wam:"customer_ads_sharing_setting_enabled"` // field 11
}