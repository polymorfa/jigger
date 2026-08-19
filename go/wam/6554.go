const WamMmSignalSharingVerificationEvent = 6554 // channel: private

type MmSignalSharingVerificationEventEvent struct {
	BusinessLidOrJid string `wam:"business_lid_or_jid"` // field 1
	CollectionWindowId string `wam:"collection_window_id"` // field 3
	IsUserDisclosed bool `wam:"is_user_disclosed"` // field 4
	OnePdSignalNotSharedReason ONEPDSIGNALNOTSHAREDREASON `wam:"one_pd_signal_not_shared_reason"` // field 5
	SignalCanceledReason SIGNALCANCELEDREASON `wam:"signal_canceled_reason"` // field 6
	SignalMessageState SIGNALMESSAGESTATE `wam:"signal_message_state"` // field 7
	SignalMessageType SIGNALMESSAGETYPE `wam:"signal_message_type"` // field 8
	SignalOrigin SIGNALORIGIN `wam:"signal_origin"` // field 9
	SignalSharingStatus SIGNALSHARINGSTATUS `wam:"signal_sharing_status"` // field 10
	SignalSurface SIGNALSURFACE `wam:"signal_surface"` // field 11
	SignalType SIGNALTYPE `wam:"signal_type"` // field 12
	SpSignalNotSharedReason SPSIGNALNOTSHAREDREASON `wam:"sp_signal_not_shared_reason"` // field 13
	TemplateId string `wam:"template_id"` // field 14
	IsCompanionDevice bool `wam:"is_companion_device"` // field 16
	EntSourceSubplatform string `wam:"ent_source_subplatform"` // field 17
	DeltaTimeReceived int64 `wam:"delta_time_received"` // field 18
	IsNetworkAvailable bool `wam:"is_network_available"` // field 20
	IsShimmingSignal bool `wam:"is_shimming_signal"` // field 21
	IsIabRestore bool `wam:"is_iab_restore"` // field 22
	SignalTypeOrigin string `wam:"signal_type_origin"` // field 23
	IsLatestConversionToken bool `wam:"is_latest_conversion_token"` // field 24
	MmConversationDepth int64 `wam:"mm_conversation_depth"` // field 25
	MmConversationRepeat int64 `wam:"mm_conversation_repeat"` // field 26
	MmDirectionFrom MMDIRECTIONFROM `wam:"mm_direction_from"` // field 27
	AccountLinked bool `wam:"account_linked"` // field 28
	ConsentSource CONSENTSOURCE `wam:"consent_source"` // field 29
}