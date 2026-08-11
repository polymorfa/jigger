pub const WAM_CONSUMER_BIZ_INTERACTION_JOURNEY: u32 = 7760;

#[derive(Debug, Default)]
pub struct ConsumerBizInteractionJourneyEvent {
    /// field 1, wire `consumer_biz_action_target`
    pub consumer_biz_action_target: Option<CONSUMERBIZACTIONTARGETENUM>,
    /// field 2, wire `consumer_biz_action_type`
    pub consumer_biz_action_type: Option<CONSUMERBIZACTIONTYPEENUM>,
    /// field 3, wire `consumer_biz_entry_point`
    pub consumer_biz_entry_point: Option<CONSUMERBIZENTRYPOINTENUM>,
    /// field 4, wire `consumer_biz_extra_attributes`
    pub consumer_biz_extra_attributes: Option<String>,
    /// field 5, wire `consumer_biz_feature`
    pub consumer_biz_feature: Option<CONSUMERBIZFEATUREENUM>,
    /// field 6, wire `consumer_biz_seq_id`
    pub consumer_biz_seq_id: Option<i64>,
    /// field 7, wire `consumer_biz_session_id`
    pub consumer_biz_session_id: Option<String>,
    /// field 8, wire `consumer_biz_surface`
    pub consumer_biz_surface: Option<CONSUMERBIZSURFACEENUM>,
    /// field 9, wire `business_jid`
    pub business_jid: Option<String>,
    /// field 10, wire `sensitive_extra_attributes`
    pub sensitive_extra_attributes: Option<String>,
}