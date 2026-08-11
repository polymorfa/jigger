pub const WAM_DANGEROUS_FILE_OPEN_STATS_V2: u32 = 6708;

#[derive(Debug, Default)]
pub struct DangerousFileOpenStatsV2Event {
    /// field 1, wire `harmful_file_warning_clickthrough_action`
    pub harmful_file_warning_clickthrough_action: Option<HARMFULFILEWARNINGCLICKTHROUGHACTION>,
    /// field 2, wire `harmful_file_warning_sender_relationship`
    pub harmful_file_warning_sender_relationship: Option<HARMFULFILEWARNINGSENDERRELATIONSHIP>,
}