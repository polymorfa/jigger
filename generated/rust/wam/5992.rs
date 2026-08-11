pub const WAM_CTWA_BIZ_USER_JOURNEY: u32 = 5992;

#[derive(Debug, Default)]
pub struct CtwaBizUserJourneyEvent {
    /// field 1, wire `ctwa_biz_user_journey_metadata`
    pub ctwa_biz_user_journey_metadata: Option<String>,
    /// field 2, wire `ctwa_biz_user_journey_operation`
    pub ctwa_biz_user_journey_operation: Option<CTWABIZUSERJOURNEYOPERATION>,
    /// field 3, wire `ad_id`
    pub ad_id: Option<String>,
    /// field 4, wire `biz_feature_enabled`
    pub biz_feature_enabled: Option<String>,
    /// field 6, wire `ctwa_biz_user_jounery_entry_point`
    pub ctwa_biz_user_jounery_entry_point: Option<String>,
    /// field 7, wire `ctwa_biz_event_reason`
    pub ctwa_biz_event_reason: Option<String>,
}