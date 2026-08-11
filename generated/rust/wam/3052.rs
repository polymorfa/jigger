pub const WAM_PS_STRUCTURED_MESSAGE_INTERACTION: u32 = 3052;

#[derive(Debug, Default)]
pub struct PsStructuredMessageInteractionEvent {
    /// field 1, wire `biz_platform`
    pub biz_platform: Option<BIZPLATFORM>,
    /// field 2, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 3, wire `message_class`
    pub message_class: Option<STRUCTUREDMESSAGECLASS>,
    /// field 4, wire `message_interaction`
    pub message_interaction: Option<INTERACTIONTYPE>,
    /// field 5, wire `message_class_attributes`
    pub message_class_attributes: Option<String>,
    /// field 7, wire `business_owner_jid`
    pub business_owner_jid: Option<String>,
    /// field 8, wire `template_id`
    pub template_id: Option<String>,
    /// field 9, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
}