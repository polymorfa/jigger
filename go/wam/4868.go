const WamBotBizJourney = 4868 // channel: regular

type BotBizJourneyEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	BotType BOTTYPE `wam:"bot_type"` // field 4
	BotBizActionType BOTBIZACTIONTYPE `wam:"bot_biz_action_type"` // field 5
	BotBizEntryPoint BOTBIZENTRYPOINT `wam:"bot_biz_entry_point"` // field 6
	BotBizType BOTBIZTYPE `wam:"bot_biz_type"` // field 7
}