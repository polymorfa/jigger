pub const WAM_MD_GROUP_PARTICIPANT_MISS_ACK: u32 = 4146;

#[derive(Debug, Default)]
pub struct MdGroupParticipantMissAckEvent {
    /// field 1, wire `group_size_bucket`
    pub group_size_bucket: Option<CLIENTGROUPSIZEBUCKET>,
    /// field 2, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 3, wire `message_is_revoke`
    pub message_is_revoke: Option<bool>,
    /// field 4, wire `participant_add_count`
    pub participant_add_count: Option<i64>,
    /// field 5, wire `participant_remove_count`
    pub participant_remove_count: Option<i64>,
    /// field 6, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
}