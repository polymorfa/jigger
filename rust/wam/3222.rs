pub const WAM_STRUCTURED_MESSAGE_RECEIVE: u32 = 3222;

#[derive(Debug, Default)]
pub struct StructuredMessageReceiveEvent {
    /// field 1, wire `biz_platform`
    pub biz_platform: Option<BIZPLATFORM>,
    /// field 2, wire `business_owner_jid`
    pub business_owner_jid: Option<String>,
    /// field 3, wire `message_class`
    pub message_class: Option<STRUCTUREDMESSAGECLASS>,
    /// field 4, wire `message_class_attributes`
    pub message_class_attributes: Option<String>,
    /// field 5, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 6, wire `template_id`
    pub template_id: Option<String>,
    /// field 7, wire `entry_point_conversation_initiated`
    pub entry_point_conversation_initiated: Option<ENTRYPOINTCONVERSATIONINITIATED>,
    /// field 8, wire `entry_point_conversion_app`
    pub entry_point_conversion_app: Option<String>,
    /// field 9, wire `entry_point_conversion_source`
    pub entry_point_conversion_source: Option<String>,
    /// field 10, wire `last_message_direction`
    pub last_message_direction: Option<LASTMESSAGEDIRECTION>,
    /// field 11, wire `message_depth`
    pub message_depth: Option<i64>,
    /// field 12, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
}