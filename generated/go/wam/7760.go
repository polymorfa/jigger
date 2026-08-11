const WamConsumerBizInteractionJourney = 7760 // channel: private

type ConsumerBizInteractionJourneyEvent struct {
	ConsumerBizActionTarget CONSUMERBIZACTIONTARGETENUM `wam:"consumer_biz_action_target"` // field 1
	ConsumerBizActionType CONSUMERBIZACTIONTYPEENUM `wam:"consumer_biz_action_type"` // field 2
	ConsumerBizEntryPoint CONSUMERBIZENTRYPOINTENUM `wam:"consumer_biz_entry_point"` // field 3
	ConsumerBizExtraAttributes string `wam:"consumer_biz_extra_attributes"` // field 4
	ConsumerBizFeature CONSUMERBIZFEATUREENUM `wam:"consumer_biz_feature"` // field 5
	ConsumerBizSeqId int64 `wam:"consumer_biz_seq_id"` // field 6
	ConsumerBizSessionId string `wam:"consumer_biz_session_id"` // field 7
	ConsumerBizSurface CONSUMERBIZSURFACEENUM `wam:"consumer_biz_surface"` // field 8
	BusinessJid string `wam:"business_jid"` // field 9
	SensitiveExtraAttributes string `wam:"sensitive_extra_attributes"` // field 10
}