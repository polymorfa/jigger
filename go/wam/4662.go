const WamCtwaLabelSignal = 4662 // channel: regular

type CtwaLabelSignalEvent struct {
	CtwaLabelSignalVersion int64 `wam:"ctwa_label_signal_version"` // field 1
	CtwaLabelTarget CTWALABELTARGET `wam:"ctwa_label_target"` // field 2
	CtwaLabelType CTWALABELTYPE `wam:"ctwa_label_type"` // field 3
	DeepLinkConversionData string `wam:"deep_link_conversion_data"` // field 4
	DeepLinkConversionSource string `wam:"deep_link_conversion_source"` // field 5
	EventSharingSettingEnabled bool `wam:"event_sharing_setting_enabled"` // field 6
	GlobalSharingSettingEnabled bool `wam:"global_sharing_setting_enabled"` // field 7
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 8
	CtwaSignalMetadata string `wam:"ctwa_signal_metadata"` // field 9
	CustomerAdsSharingSettingEnabled CUSTOMERADSSHARINGSETTINGENABLED `wam:"customer_ads_sharing_setting_enabled"` // field 10
	CtwaConversationDepth int64 `wam:"ctwa_conversation_depth"` // field 11
}