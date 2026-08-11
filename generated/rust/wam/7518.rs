pub const WAM_STRUCTURED_MESSAGE_BUYER_INTERACTION: u32 = 7518;

#[derive(Debug, Default)]
pub struct StructuredMessageBuyerInteractionEvent {
    /// field 1, wire `biz_platform`
    pub biz_platform: Option<BIZPLATFORM>,
    /// field 2, wire `message_class`
    pub message_class: Option<STRUCTUREDMESSAGECLASS>,
    /// field 3, wire `message_class_attributes`
    pub message_class_attributes: Option<String>,
    /// field 4, wire `message_interaction`
    pub message_interaction: Option<INTERACTIONTYPE>,
    /// field 5, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
}