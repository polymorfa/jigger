pub const WAM_BUSINESS_UNMUTE: u32 = 1378;

#[derive(Debug, Default)]
pub struct BusinessUnmuteEvent {
    /// field 1, wire `mutee_id`
    pub mutee_id: Option<String>,
}