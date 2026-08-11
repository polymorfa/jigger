pub const WAM_MD_APP_STATE_MESSAGE_RANGE: u32 = 2522;

#[derive(Debug, Default)]
pub struct MdAppStateMessageRangeEvent {
    /// field 1, wire `additional_messages_count`
    pub additional_messages_count: Option<i64>,
}