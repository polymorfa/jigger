const WamMerchantCommerceEvent = 4688 // channel: regular

type MerchantCommerceEventEvent struct {
	AcceptedPaymentMethods string `wam:"accepted_payment_methods"` // field 1
	AdId string `wam:"ad_id"` // field 2
	AppSessionId string `wam:"app_session_id"` // field 3
	BizPlatform BIZPLATFORM `wam:"biz_platform"` // field 4
	CommerceExperience string `wam:"commerce_experience"` // field 6
	CommerceInteractionAction string `wam:"commerce_interaction_action"` // field 7
	CommercePaymentStatus string `wam:"commerce_payment_status"` // field 8
	CommerceSessionId string `wam:"commerce_session_id"` // field 9
	CommerceSurface string `wam:"commerce_surface"` // field 10
	ExtraAttributes string `wam:"extra_attributes"` // field 11
	IsCtwaOriginated bool `wam:"is_ctwa_originated"` // field 12
	IsEligibleForAdSignal bool `wam:"is_eligible_for_ad_signal"` // field 13
	MerchantHasCatalog bool `wam:"merchant_has_catalog"` // field 14
	MerchantIsDiscoverable bool `wam:"merchant_is_discoverable"` // field 15
	P2mFlow string `wam:"p2m_flow"` // field 17
	Referral string `wam:"referral"` // field 18
	SequenceId int64 `wam:"sequence_id"` // field 19
	CommerceFlowId string `wam:"commerce_flow_id"` // field 20
	CommerceInteractionActionType string `wam:"commerce_interaction_action_type"` // field 21
	CommerceOrderStatus string `wam:"commerce_order_status"` // field 22
}