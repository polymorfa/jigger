pub const WAM_MD_APP_STATE_OFFLINE_NOTIFICATIONS: u32 = 2602;

#[derive(Debug, Default)]
pub struct MdAppStateOfflineNotificationsEvent {
    /// field 1, wire `redundant_count`
    pub redundant_count: Option<i64>,
}