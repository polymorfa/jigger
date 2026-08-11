pub const WAM_BOT_BIZ_JOURNEY: u32 = 4868;

#[derive(Debug, Default)]
pub struct BotBizJourneyEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 4, wire `bot_type`
    pub bot_type: Option<BOTTYPE>,
    /// field 5, wire `bot_biz_action_type`
    pub bot_biz_action_type: Option<BOTBIZACTIONTYPE>,
    /// field 6, wire `bot_biz_entry_point`
    pub bot_biz_entry_point: Option<BOTBIZENTRYPOINT>,
    /// field 7, wire `bot_biz_type`
    pub bot_biz_type: Option<BOTBIZTYPE>,
}