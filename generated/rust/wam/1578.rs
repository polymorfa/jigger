pub const WAM_BANNER_EVENT: u32 = 1578;

#[derive(Debug, Default)]
pub struct BannerEventEvent {
    /// field 1, wire `banner_type`
    pub banner_type: Option<BANNERTYPES>,
    /// field 2, wire `banner_operation`
    pub banner_operation: Option<BANNEROPERATIONS>,
    /// field 3, wire `banner_id`
    pub banner_id: Option<String>,
    /// field 4, wire `device_id`
    pub device_id: Option<String>,
    /// field 5, wire `notification_log_id`
    pub notification_log_id: Option<String>,
}