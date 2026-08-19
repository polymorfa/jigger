const WamMmSignalSharingVerificationFsEvent = 6798 // channel: regular

type MmSignalSharingVerificationFsEventEvent struct {
	IsCompanionDevice bool `wam:"is_companion_device"` // field 1
	IsUserDisclosed bool `wam:"is_user_disclosed"` // field 2
	OnePdSignalNotSharedReason ONEPDSIGNALNOTSHAREDREASON `wam:"one_pd_signal_not_shared_reason"` // field 3
	SignalCanceledReason SIGNALCANCELEDREASON `wam:"signal_canceled_reason"` // field 4
	SignalMessageState SIGNALMESSAGESTATE `wam:"signal_message_state"` // field 5
	SignalMessageType SIGNALMESSAGETYPE `wam:"signal_message_type"` // field 6
	SignalOrigin SIGNALORIGIN `wam:"signal_origin"` // field 7
	SignalSharingStatus SIGNALSHARINGSTATUS `wam:"signal_sharing_status"` // field 8
	SignalSurface SIGNALSURFACE `wam:"signal_surface"` // field 9
	SignalType SIGNALTYPE `wam:"signal_type"` // field 10
	SpSignalNotSharedReason SPSIGNALNOTSHAREDREASON `wam:"sp_signal_not_shared_reason"` // field 11
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 12
	IsShimmingSignal bool `wam:"is_shimming_signal"` // field 13
	SignalTypeOrigin string `wam:"signal_type_origin"` // field 14
	IsLatestConversionToken bool `wam:"is_latest_conversion_token"` // field 15
	MmConversationDepth int64 `wam:"mm_conversation_depth"` // field 16
	MmConversationRepeat int64 `wam:"mm_conversation_repeat"` // field 17
	MmDirectionFrom MMDIRECTIONFROM `wam:"mm_direction_from"` // field 18
	AccountLinked bool `wam:"account_linked"` // field 19
	ConsentSource CONSENTSOURCE `wam:"consent_source"` // field 20
}