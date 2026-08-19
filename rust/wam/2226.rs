pub const WAM_WEBC_PROGRESSIVE_IMAGE: u32 = 2226;

#[derive(Debug, Default)]
pub struct WebcProgressiveImageEvent {
    /// field 1, wire `webc_first_render_scans`
    pub webc_first_render_scans: Option<i64>,
    /// field 2, wire `webc_first_render_t`
    pub webc_first_render_t: Option<String>,
    /// field 3, wire `webc_mid_quality_t`
    pub webc_mid_quality_t: Option<String>,
    /// field 4, wire `webc_full_quality_t`
    pub webc_full_quality_t: Option<String>,
}