const WamMmSignalSharingVerificationWithSignalDataEvent = 6856 // channel: private

type MmSignalSharingVerificationWithSignalDataEventEvent struct {
	EntSourceSubplatform string `wam:"ent_source_subplatform"` // field 1
	IsCompanionDevice bool `wam:"is_companion_device"` // field 2
	IsUserDisclosed bool `wam:"is_user_disclosed"` // field 3
	IsUserMatched bool `wam:"is_user_matched"` // field 4
	MmSignalData string `wam:"mm_signal_data"` // field 5
	OnePdSignalNotSharedReason ONEPDSIGNALNOTSHAREDREASON `wam:"one_pd_signal_not_shared_reason"` // field 6
	SignalCanceledReason SIGNALCANCELEDREASON `wam:"signal_canceled_reason"` // field 7
	SignalMessageState SIGNALMESSAGESTATE `wam:"signal_message_state"` // field 8
	SignalMessageType SIGNALMESSAGETYPE `wam:"signal_message_type"` // field 9
	SignalOrigin SIGNALORIGIN `wam:"signal_origin"` // field 10
	SignalSharingStatus SIGNALSHARINGSTATUS `wam:"signal_sharing_status"` // field 11
	SignalSurface SIGNALSURFACE `wam:"signal_surface"` // field 12
	SignalType SIGNALTYPE `wam:"signal_type"` // field 13
	SpSignalNotSharedReason SPSIGNALNOTSHAREDREASON `wam:"sp_signal_not_shared_reason"` // field 14
	IsNetworkAvailable bool `wam:"is_network_available"` // field 16
	IsShimmingSignal bool `wam:"is_shimming_signal"` // field 17
	SignalTypeOrigin string `wam:"signal_type_origin"` // field 18
	IsLatestConversionToken bool `wam:"is_latest_conversion_token"` // field 19
	MmConversationDepth int64 `wam:"mm_conversation_depth"` // field 20
	MmConversationRepeat int64 `wam:"mm_conversation_repeat"` // field 21
	MmDirectionFrom MMDIRECTIONFROM `wam:"mm_direction_from"` // field 22
	AccountLinked bool `wam:"account_linked"` // field 23
	ConsentSource CONSENTSOURCE `wam:"consent_source"` // field 24
}