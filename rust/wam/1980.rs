pub const WAM_PLACEHOLDER_ACTIVITY: u32 = 1980;

#[derive(Debug, Default)]
pub struct PlaceholderActivityEvent {
    /// field 1, wire `placeholder_type_ind`
    pub placeholder_type_ind: Option<PLACEHOLDERTYPE>,
    /// field 2, wire `placeholder_action_ind`
    pub placeholder_action_ind: Option<PLACEHOLDERACTION>,
    /// field 3, wire `placeholder_chat_type_ind`
    pub placeholder_chat_type_ind: Option<PLACEHOLDERCHATTYPE>,
    /// field 4, wire `placeholder_time_period`
    pub placeholder_time_period: Option<i64>,
    /// field 5, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 6, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 7, wire `message_is_revoke`
    pub message_is_revoke: Option<bool>,
    /// field 8, wire `device_size_bucket`
    pub device_size_bucket: Option<SIZEBUCKET>,
    /// field 9, wire `device_count`
    pub device_count: Option<i64>,
    /// field 10, wire `participant_count`
    pub participant_count: Option<i64>,
    /// field 11, wire `placeholder_add_reason`
    pub placeholder_add_reason: Option<PLACEHOLDERREASONTYPE>,
    /// field 12, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 13, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 14, wire `message_key_hash`
    pub message_key_hash: Option<String>,
    /// field 15, wire `message_before_reg`
    pub message_before_reg: Option<bool>,
    /// field 16, wire `e2e_sender_type`
    pub e2e_sender_type: Option<E2EDEVICETYPE>,
    /// field 17, wire `placeholder_population_type`
    pub placeholder_population_type: Option<PLACEHOLDERPOPULATIONTYPE>,
    /// field 19, wire `is_hosted_chat`
    pub is_hosted_chat: Option<bool>,
    /// field 20, wire `local_addressing_mode`
    pub local_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 22, wire `encryption_type`
    pub encryption_type: Option<ENCRYPTIONTYPECODE>,
    /// field 23, wire `is_simple_signal`
    pub is_simple_signal: Option<bool>,
    /// field 24, wire `bot_type`
    pub bot_type: Option<BOTTYPE>,
    /// field 25, wire `sender_platform`
    pub sender_platform: Option<PLATFORMTYPE>,
}