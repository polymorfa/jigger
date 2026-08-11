const WamWhatsappQuickPromotionClientEligibilityWaterfall = 4360 // channel: regular

type WhatsappQuickPromotionClientEligibilityWaterfallEvent struct {
	EligibilityStatus bool `wam:"eligibility_status"` // field 1
	PromotionId string `wam:"promotion_id"` // field 2
	QpFailureReason string `wam:"qp_failure_reason"` // field 3
	Step string `wam:"step"` // field 4
	InstanceLogData string `wam:"instance_log_data"` // field 5
	ClientExtraData string `wam:"client_extra_data"` // field 6
}