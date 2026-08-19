pub const WAM_WEBC_WHATS_NEW_IMPRESSION: u32 = 8200;

#[derive(Debug, Default)]
pub struct WebcWhatsNewImpressionEvent {
    /// field 1, wire `webc_whats_new_action`
    pub webc_whats_new_action: Option<WEBCWHATSNEWACTIONTYPE>,
    /// field 2, wire `webc_whats_new_surface`
    pub webc_whats_new_surface: Option<WEBCWHATSNEWSURFACETYPE>,
    /// field 3, wire `webc_whats_new_time_spent`
    pub webc_whats_new_time_spent: Option<String>,
    /// field 4, wire `webc_whats_new_variant`
    pub webc_whats_new_variant: Option<i64>,
}