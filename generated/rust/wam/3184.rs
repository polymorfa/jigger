pub const WAM_REACTION_ACTIONS: u32 = 3184;

#[derive(Debug, Default)]
pub struct ReactionActionsEvent {
    /// field 1, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 2, wire `reaction_action`
    pub reaction_action: Option<REACTIONACTIONTYPE>,
    /// field 3, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
}