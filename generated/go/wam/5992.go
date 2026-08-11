const WamCtwaBizUserJourney = 5992 // channel: regular

type CtwaBizUserJourneyEvent struct {
	CtwaBizUserJourneyMetadata string `wam:"ctwa_biz_user_journey_metadata"` // field 1
	CtwaBizUserJourneyOperation CTWABIZUSERJOURNEYOPERATION `wam:"ctwa_biz_user_journey_operation"` // field 2
	AdId string `wam:"ad_id"` // field 3
	BizFeatureEnabled string `wam:"biz_feature_enabled"` // field 4
	CtwaBizUserJouneryEntryPoint string `wam:"ctwa_biz_user_jounery_entry_point"` // field 6
	CtwaBizEventReason string `wam:"ctwa_biz_event_reason"` // field 7
}