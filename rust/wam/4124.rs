pub const WAM_MANAGE_ADS_ENTRY_POINT_IMPRESSION: u32 = 4124;

#[derive(Debug, Default)]
pub struct ManageAdsEntryPointImpressionEvent {
    /// field 1, wire `manage_ads_entry_point`
    pub manage_ads_entry_point: Option<MANAGEADSENTRYPOINT>,
}